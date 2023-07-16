import * as mongoose from 'mongoose';
export declare const StudentSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string;
    age?: number;
    city?: string;
    initial?: string;
}, mongoose.Document<unknown, {}, {
    name?: string;
    age?: number;
    city?: string;
    initial?: string;
}> & {
    name?: string;
    age?: number;
    city?: string;
    initial?: string;
} & {
    _id: mongoose.Types.ObjectId;
}>;
