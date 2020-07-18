import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AbstractService } from '~/commons/services/abstract.service';
import { IUser } from '~/user/interfaces/user.interface';
import { userModelName } from '~/user/user.model-name';
import { postModelName } from '../models/post.model-name';
import { Model } from 'mongoose';
import { IPost } from '~/post/models/interfaces/post.interface';

@Injectable()
export class PostService extends AbstractService<IPost> {
    constructor(
        @InjectModel(postModelName) private readonly postModel: Model<IUser>
    ) {
        super(postModel);
    }
}
