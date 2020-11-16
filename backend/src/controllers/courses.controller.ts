import { RequestHandler } from 'express';
import asyncHandler from 'express-async-handler';
import Course from '../models/courseModel';

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
  const courseFound = await Course.findById(req.params.id);
  if (!courseFound)
    return res.status(204).json({ message: 'Course not found' });

  res.json(courseFound);
});

export const updateCourseById: RequestHandler = asyncHandler(
  async (req, res) => {
    const courseUpdated = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      courseUpdated,
    });
  }
);
