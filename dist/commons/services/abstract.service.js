"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const bson_1 = require("bson");
const utils_1 = require("~/commons/utils");
class AbstractService {
    constructor(model) {
        this.abstractModel = model;
    }
    async insertOne(payload) {
        const course = await this.abstractModel.create(payload);
        return course.save();
    }
    async insertMany(payload) {
        return this.abstractModel.insertMany(payload);
    }
    async upsertOne(queryFilter, payload) {
        return this.abstractModel.findOneAndUpdate(queryFilter, payload, {
            upsert: true,
            new: true,
            useFindAndModify: false,
            setDefaultsOnInsert: true,
        });
    }
    async findOne(queryFilter) {
        const found = await this.abstractModel.findOne(queryFilter);
        return found || null;
    }
    async findLastUpdated(queryFilter) {
        const latest = await this.abstractModel
            .find(queryFilter)
            .sort({ updatedAt: -1 })
            .limit(1);
        return latest && latest.length > 0 ? latest[0] : null;
    }
    async findMany(queryFilter, clientFilter = {}) {
        const { offset, limit, filter, orderBy } = utils_1.normalizeClientFilterForSearch(clientFilter);
        const filterWith = utils_1.mergeQueryFilters(queryFilter, filter);
        return this.abstractModel
            .find(filterWith)
            .sort({
            [orderBy.property]: orderBy.direction,
        })
            .skip(offset)
            .limit(limit);
    }
    async findManyByIds(ids, clientFilter) {
        const { offset, limit, orderBy } = utils_1.normalizeClientFilterForSearch(clientFilter);
        return this.abstractModel
            .find({
            _id: {
                $in: ids,
            },
        })
            .sort({
            [orderBy.property]: orderBy.direction,
        })
            .skip(offset)
            .limit(limit);
    }
    async findOneById(id) {
        return this.abstractModel.findById(id);
    }
    async findOneByIdOrFail(id) {
        return this.findOneOrFail({ _id: id });
    }
    async failIfFoundById(id) {
        const found = await this.findOneById(id);
        if (found) {
            throw new common_1.ConflictException();
        }
    }
    async failIfFound(queryFilter, opts) {
        const found = await this.findMany(queryFilter, opts);
        if (found.length > 0) {
            throw new common_1.ConflictException();
        }
    }
    async removeOneById(id) {
        const result = await this.abstractModel.remove({
            _id: id,
        });
        return Boolean(result.ok);
    }
    async removeOneByIdOrFail(id) {
        return this.removeOneOrFail({ _id: id });
    }
    async removeOneOrFail(queryFilter) {
        const result = await this.abstractModel.deleteOne(queryFilter);
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException();
        }
        return Boolean(result.ok);
    }
    async findOneOrFail(queryFilter) {
        const found = await this.abstractModel.findOne(queryFilter);
        if (!found) {
            throw new common_1.NotFoundException();
        }
        return found;
    }
    async updateOneById(id, payload) {
        const result = await this.abstractModel.findOneAndUpdate({ _id: id }, payload, {
            new: true,
            useFindAndModify: false,
            setDefaultsOnInsert: true,
        });
        if (!result) {
            throw new common_1.NotFoundException();
        }
        return result;
    }
    async addChildToArray(parentId, arrayField, childDoc) {
        try {
            const updated = await this.abstractModel.findByIdAndUpdate(parentId, { $addToSet: { [arrayField]: childDoc } }, { new: true });
            return updated[arrayField].pop();
        }
        catch (e) {
            throw new common_1.NotFoundException();
        }
    }
    async removeChildFromArrayById(parentId, arrayField, childId) {
        const parent = await this.abstractModel.findOne({ _id: parentId });
        const childIndex = parent[arrayField].findIndex(child => child.id === childId);
        if (childIndex === -1) {
            throw new common_1.NotFoundException();
        }
        parent[arrayField].splice(childIndex, 1);
        await parent.save();
        return true;
    }
    async removeChildFromArray(parentId, arrayField, childValue) {
        const parent = await this.abstractModel.findOne({ _id: parentId });
        const childIndex = parent[arrayField].findIndex(child => child.toString() === childValue);
        if (childIndex === -1) {
            throw new common_1.NotFoundException();
        }
        parent[arrayField].splice(childIndex, 1);
        await parent.save();
        return true;
    }
    async findChildFromArrayOrFail(parentId, arrayField, childId) {
        const parent = await this.abstractModel.findOne({ _id: parentId });
        const childFound = parent[arrayField].find(child => child.id === childId);
        if (childFound === undefined) {
            throw new common_1.NotFoundException();
        }
        return childFound;
    }
    async updateChildInArray(parentId, arrayField, childId, childDoc) {
        const parent = await this.abstractModel.findOne({ _id: parentId });
        const childIndex = parent[arrayField].findIndex(child => child.id === childId);
        if (childIndex === -1) {
            throw new common_1.NotFoundException();
        }
        parent[arrayField].splice(childIndex, 1, Object.assign(childDoc, { _id: childId }));
        await parent.save();
        return true;
    }
    async addToSet(queryFilter, setProp, value) {
        const result = await this.abstractModel.updateOne(queryFilter, { $addToSet: { [setProp]: value } });
        return Boolean(result.ok);
    }
    async updateMany(queryFilter, payload, clientFilter) {
        const { offset, limit, orderBy } = utils_1.normalizeClientFilterForSearch(clientFilter);
        const result = await this.abstractModel
            .updateMany(queryFilter, payload)
            .sort({
            [orderBy.property]: orderBy.direction,
        })
            .skip(offset)
            .limit(limit);
        return result;
    }
    async findManyAndUpdate(queryFilter, payload, opts) {
        await this.updateMany(queryFilter, payload, opts);
        return this.findMany(queryFilter, opts);
    }
    async count(queryFilter = {}, clientFilter = {}) {
        const { offset, limit, filter, orderBy } = utils_1.normalizeClientFilterForCount(clientFilter);
        const filterWith = utils_1.mergeQueryFilters(queryFilter, filter);
        return this.abstractModel
            .countDocuments(filterWith)
            .sort({
            [orderBy.property]: orderBy.direction,
        })
            .skip(offset)
            .limit(limit);
    }
    copyDocument(doc) {
        doc._id = new bson_1.ObjectId();
        doc.isNew = true;
        return doc;
    }
    async cloneById(id) {
        const doc = await this.findOneById(id);
        const newDoc = this.copyDocument(doc);
        return newDoc.save();
    }
    async cloneByIdOrFail(id) {
        const doc = await this.findOneByIdOrFail(id);
        const newDoc = this.copyDocument(doc);
        return newDoc.save();
    }
    async updatedGrandchildToLiteralSet(parentId, arrayField, arrayFieldNested, childId, grandChildId, grandChildDoc) {
        const parent = await this.abstractModel.findOne({ _id: parentId });
        const childIndex = parent[arrayField].findIndex(chld => chld.id === childId);
        if (childIndex === -1) {
            throw new common_1.NotFoundException();
        }
        const child = parent[arrayField][childIndex];
        const grandChildIndex = child[arrayFieldNested].findIndex(grandChild => grandChild.id === grandChildId);
        if (grandChildIndex === -1) {
            throw new common_1.NotFoundException();
        }
        child[arrayFieldNested].splice(grandChildIndex, 1, Object.assign(grandChildDoc, { _id: grandChildId }));
        await parent.save();
        return true;
    }
    async addGrandchildToLiteralSet(parentId, arrayField, arrayFieldNested, childId, grandchildLiteral) {
        const arrayToUpdate = arrayField + '.$.' + arrayFieldNested;
        const updated = await this.abstractModel.findOneAndUpdate({ _id: parentId, [arrayField]: { $elemMatch: { _id: childId } } }, { $addToSet: { [arrayToUpdate]: grandchildLiteral } }, { new: true });
        return updated;
    }
    async removeGrandchildFromLiteralSet(parentId, arrayField, arrayFieldNested, childId, grandchildLiteral) {
        const arrayToUpdate = arrayField + '.$.' + arrayFieldNested;
        const updated = await this.abstractModel.findOneAndUpdate({ _id: parentId, [arrayField]: { $elemMatch: { _id: childId } } }, {
            $pull: {
                [arrayToUpdate]: grandchildLiteral,
            },
        });
        return true;
    }
    async findGrandchildFromLiteralSet(arrayField, arrayFieldNested, grandchildField, grandchildLiteral) {
        const grandChildFound = await this.abstractModel.find({
            [arrayField]: {
                $elemMatch: {
                    [arrayFieldNested]: {
                        $elemMatch: { [grandchildField]: grandchildLiteral },
                    },
                },
            },
        });
        if (grandChildFound === undefined) {
            throw new common_1.NotFoundException();
        }
        return grandChildFound;
    }
    async removeManyByIds(ids) {
        const result = await this.abstractModel.remove({
            _id: {
                $in: ids,
            },
        });
        return result.deletedCount;
    }
    async removeMany(queryFilter, clientFilter = {}) {
        const { offset, limit, filter, orderBy } = utils_1.normalizeClientFilterForSearch(clientFilter);
        const filterWith = utils_1.mergeQueryFilters(queryFilter, filter);
        const result = await this.abstractModel
            .remove(filterWith)
            .sort({
            [orderBy.property]: orderBy.direction,
        })
            .skip(offset)
            .limit(limit);
        return result.deletedCount;
    }
}
exports.AbstractService = AbstractService;
//# sourceMappingURL=abstract.service.js.map