import { RequestHandler } from 'express';
import asyncHandler from 'express-async-handler';
import Course from '../models/courseModel';
import User from '../models/userModel';

export const createCourse: RequestHandler = asyncHandler(async (req, res) => {
  const course = new Course(req.body);
  const savedCourse = await course.save();

  res.json(savedCourse);
});

export const getCourses: RequestHandler = asyncHandler(async (req, res) => {
  const courses = await Course.find();

  res.json(courses);
});

export const getCourseById: RequestHandler = asyncHandler(async (req, res) => {
  const courseFound = await Course.findById(req.params.courseId);
  if (!courseFound)
    return res.status(204).json({ message: 'Course not found' });

  res.json(courseFound);
});

export const updateCourseById: RequestHandler = asyncHandler(
  async (req, res) => {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.courseId,
      req.body,
      { new: true }
    );

    // const user = await User.findById(req.userId);

    res.json({
      updatedCourse,
      // currentUser: user,
    });
  }
);

export const deleteCourseById: RequestHandler = asyncHandler(
  async (req, res) => {
    const deletedCourse = await Course.findByIdAndDelete(req.params.courseId);

    res.json({
      deletedCourse,
    });
  }
);
