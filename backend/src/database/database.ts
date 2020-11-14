import mongoose, { ConnectionOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URI = process.env.URI || 'mongodb://localhost/classroom-mern';


(async () => {
  try {
    console.log(process.env.URI)
    const connectionOptions: ConnectionOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };

    mongoose.connect(URI, connectionOptions);
    console.log('Connected to MongoDb');
  } catch (error) {
    console.log(error);
  }
})();
