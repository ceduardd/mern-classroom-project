import app from './app';
import dotenv from 'dotenv';
import './database/database'

dotenv.config();



app.listen(4000, () => {
  console.log('Server running on port 4000');
});
