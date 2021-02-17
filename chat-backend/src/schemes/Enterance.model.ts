import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';


export const EnteranceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    party: { type: String, required: true },
    timestamp: { type: Number, required: true },
    ip: { type: String, required: true },
    theme: { type: String, required: true },
  });
  

export interface Enterance extends mongoose.Document {
    id: string;
    name: string;
    party: string;
    timestamp: number;
    ip: string;
    theme: string;
  }