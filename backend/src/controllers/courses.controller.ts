import { RequestHandler } from 'express';
import Course from '../models/courseModel';

export const createCourse: RequestHandler = async (req, res) => {
  try {
    const course = new Course(req.body);
    const savedCourse = await course.save();
    res.json(savedCourse);
  } catch (error) {
    console.log(error);
  }
};

export const getCourses: RequestHandler = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.log(error);
  }
};

export const getCourse: RequestHandler = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(204).json({ message: 'Course not found' });

    res.json(course);
  } catch (error) {
    console.log(error);
  }
};
