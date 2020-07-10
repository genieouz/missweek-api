import { UserGender } from '~/user/types/user-gender';
import { Field, InputType } from 'type-graphql';

@InputType()
export class CompleteRegistrationInput {
  @Field()
  public fullName: string;

  @Field()
  public birthDate: Date;

  @Field(type => UserGender)
  public gender: UserGender;

  @Field({ nullable: true })
  public instagramUsername: String;
}