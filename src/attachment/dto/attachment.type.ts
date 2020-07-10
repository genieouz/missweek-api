import { Field, ID, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Attachment {
  @Field(type => ID)
  public id: string;

  @Field(type => ID)
  public targetRef: string;

  @Field(type => Int)
  public sizeB: string;

  @Field()
  public extension: string;
}
