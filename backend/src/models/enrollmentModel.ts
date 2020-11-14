import { Schema, model } from 'mongoose';

const enrollmentSchema = new Schema(
  {
    course: { type: Schema.Types.ObjectId, ref: 'Course' },
    updatedAt: Date,
    enrolledAt: {
      type: Date,
      default: Date.now,
    },
    student: { type: Schema.Types.ObjectId, ref: 'User' },
    lessonStatus: [
      {
        lesson: { type: Schema.Types.ObjectId, ref: 'Lesson' },
        complete: Boolean,
      },
    ],
    completed: Date,
  },
  {
    versionKey: false,
  }
);

export default model('Enrollment', enrollmentSchema);
