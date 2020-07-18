import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { ID } from 'type-graphql';
import { CurrentUser } from "~/auth/decorators/current-user.decorator";
import { IUser } from "~/user/interfaces/user.interface";
import { PostEntity } from "~/post/dto/post.entity";
import { IPost } from "~/post/models/interfaces/post.interface";
import { PostService } from "~/post/services/post.service";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "~/auth/auth.guard";

@UseGuards(AuthGuard)
@Resolver()
export class PostResolver {
  constructor(
    private readonly postService: PostService
  ) { }

  @Query(returns => [PostEntity])
  async fetchPosts(): Promise<IPost[]> {
    console.log(await this.postService.findMany({}))
    return this.postService.findMany({});
  }

  @Mutation(returns => Number)
  async likePost(
    @Args({ name: 'postId', type: () => ID }) postId: string,
    @CurrentUser() currentUser: IUser
  ): Promise<number> {
    await this.postService.addToSet({ _id: postId }, 'likedBy', currentUser._id);
    const post = await this.postService.findOneById(postId);
    return post.likedBy.length;
  }

  @Mutation(returns => Number)
  async dislikePost(
    @Args({ name: 'postId', type: () => ID }) postId: string,
    @CurrentUser() currentUser: IUser
  ): Promise<number> {
    await this.postService.removeChildFromArray(postId, 'likedBy', String(currentUser._id));
    const post = await this.postService.findOneById(postId);
    return post.likedBy.length;
  }
}