import { UserGender } from '~/user/types/user-gender';
import { UserRoles } from '~/user/types/user.roles';
import { Schema } from 'mongoose';
import { userModelName } from '~/user/user.model-name';
import { attachmentModelName } from 'dist/attachment/attachment.namings';

export const PostSchema = new Schema({
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: userModelName,
        required: true,
    },
    description: {
        type: String,
    },
    likedBy: [{ type: Schema.Types.ObjectId, ref: userModelName, default: [] }],
    attachment: { type: Schema.Types.ObjectId, ref: attachmentModelName, required: true }

}, { timestamps: true });
