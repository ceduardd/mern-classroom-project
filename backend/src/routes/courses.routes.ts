import { Router } from 'express';
import * as coursesCtrl from '../controllers/courses.controller';

import { verifyToken } from '../middlewares/authJwt';

const router = Router();

const someFunction = () => {};

router.get('/courses', coursesCtrl.getCourses);
router.get('/courses/:id', coursesCtrl.getCourseById);
router.post('/courses', verifyToken, coursesCtrl.createCourse);
router.put('/courses/:id', coursesCtrl.updateCourseById);
router.get('/', someFunction);

export default router;
