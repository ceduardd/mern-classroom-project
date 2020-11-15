import { Router } from 'express';
import * as coursesController from '../controllers/courses.controller';
import { verifyToken } from '../middlewares/authJwt';

const router = Router();

const someFunction = () => {};

router.get('/courses', coursesController.getCourses);
router.get('/courses/:id', coursesController.getCourse);
router.post('/courses', coursesController.createCourse);
router.get('/', someFunction);
router.get('/', someFunction);

export default router;
