import { User } from '~/user/dto/user.type';
import { ObjectType, Field, ID } from 'type-graphql';
import { IUser } from '~/user/interfaces/user.interface';

@ObjectType()
export class PostEntity {
    @Field(type => ID)
    _id: string;

    @Field()
    description: string;

    @Field(type => ID)
    attachment: string;

    @Field(type => User)
    postedBy: IUser;

    @Field(type => Date)
    createdAt: Date;
}