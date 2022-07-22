import { Resolver, Query, Mutation, Args, ResolveProperty, Parent } from "@nestjs/graphql";
import { ID } from 'type-graphql';
import { UserService } from "~/user/services/user.service";
import { IUser } from "~/user/interfaces/user.interface";
import { PostEntity } from "~/post/dto/post.entity";
import { User } from "~/user/dto/user.type";
import { PostService } from "~/post/services/post.service";
import { IPost } from "../models/interfaces/post.interface";
import { CurrentUser } from "~/auth/decorators/current-user.decorator";

@Resolver(of => PostEntity)
export class PostPropertyResolver {
    constructor(
        private readonly postService: PostService,
        private readonly userService: UserService,
    ) { }

    @ResolveProperty(returns => User)
    postedBy(
        @Parent() post: IPost,
    ): Promise<IUser> {
        return this.userService.findOneById(post.postedBy);
    }

    @ResolveProperty(returns => Number)
    numberOfLikes(
        @Parent() post: IPost,
    ): number {
        return post.likedBy.length;
    }

    @ResolveProperty(returns => [User])
    likes(
        @Parent() post: IPost,
    ): Promise<IUser[]> {
        return this.userService.findManyByIds(post.likedBy);
    }

    @ResolveProperty(returns => Boolean)
    likedByCurrentUser(
        @Parent() post: IPost,
        @CurrentUser() currentUser: IUser,
    ): boolean {
        return post.likedBy.includes(currentUser._id);
    }


}
