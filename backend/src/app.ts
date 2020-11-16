import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import courseRoutes from './routes/courses.routes';
import authRoutes from './routes/auth.routes';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/courses', courseRoutes);
app.use('/api/auth', authRoutes);

export default app;
