import express from 'express';
import courseRoutes from './routes/courses.routes';
import authRoutes from './routes/auth.routes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', courseRoutes);
app.use('/api', authRoutes);

export default app;
