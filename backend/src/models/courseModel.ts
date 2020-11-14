import { Schema, model } from 'mongoose';

const lessonSchema = new Schema(
  {
    title: String,
    content: String,
    urlResource: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Lesson = model('Lesson', lessonSchema);

const courseSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'Name is required',
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      required: 'Category is required',
    },
    instructor: { type: Schema.Types.ObjectId, ref: 'User' },
    isPublished: {
      type: Boolean,
      default: false,
    },
    lessons: [lessonSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('Course', courseSchema);
