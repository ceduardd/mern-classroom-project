import dotenv from 'dotenv';

dotenv.config();

export default {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/classroom-mern',
  PORT: process.env.PORT || 4000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  SECRET: process.env.SECRET || 'MERN_CLASSROOM_API_SECRET',
};
