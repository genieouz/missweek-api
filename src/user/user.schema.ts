import { UserGender } from '~/user/types/user-gender';
import { UserRoles } from '~/user/types/user.roles';
import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  phone: {
    type: Number,
    required: true,
  },
  countryCode: {
    type: Number,
  },
  fullName: {
    type: String,
  },
  gender: {
    type: UserGender,
  },
  birthDate: {
    type: Date,
  },
  role: {
    type: String,
    default: UserRoles.USER,
  },
  instagramUsername: {
    type: String,
  },
}, { timestamps: true });
