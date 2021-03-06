import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isEducator: boolean;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'Name is required',
    },
    email: {
      type: String,
      trim: true,
      unique: 'Email already exists',
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
      required: 'Email is required',
    },
    password: {
      type: String,
      required: 'Password is required',
    },
    isEducator: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model<IUser>('User', userSchema);
