import { Router } from 'express';
const router = Router();

import * as coursesCtrl from '../controllers/courses.controller';

import { verifyToken } from '../middlewares/authJwt';

router.get('/', coursesCtrl.getCourses);
router.get('/:courseId', coursesCtrl.getCourseById);
router.post('/', verifyToken, coursesCtrl.createCourse);
router.put('/:courseId', verifyToken, coursesCtrl.updateCourseById);
router.delete('/:courseId', verifyToken, coursesCtrl.deleteCourseById);

export default router;
