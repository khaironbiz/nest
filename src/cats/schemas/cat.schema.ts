import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from "mongoose";
import {Owner} from "../../owners/entities/owner.entity";

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    breed: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
    owner: Owner;
}

export const CatSchema = SchemaFactory.createForClass(Cat);