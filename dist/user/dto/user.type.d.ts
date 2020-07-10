import { UserGender } from '~/user/types/user-gender';
export declare class User {
    private _id;
    phone: number;
    countryCode: number;
    private role;
    fullName: string;
    gender: UserGender;
    birthDate: Date;
}
