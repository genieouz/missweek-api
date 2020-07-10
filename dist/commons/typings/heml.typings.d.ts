export interface HemlCompileResult {
    errors: Error[];
    html: string;
    metadata: {
        meta: any[];
        subject: string;
        size: string;
    };
}
export declare enum HemlValidateOption {
    Strict = "strict",
    Soft = "soft",
    None = "none"
}
export declare class HemlCompileOptions {
    validate: HemlValidateOption;
    cheerio: object;
    juice: object;
    beautify: object;
    elements: any[];
    constructor(validationLevel?: HemlValidateOption);
}
