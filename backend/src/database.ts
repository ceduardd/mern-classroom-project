import mongoose, { ConnectionOptions } from 'mongoose';
import config from './config';

(async () => {
  try {
    const connectionOptions: ConnectionOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    };

    const db = await mongoose.connect(config.MONGO_URI, connectionOptions);
    console.log(`Connected to MongoDB: ${db.connection.host}`);
  } catch (error) {
    console.error(error);
  }
})();
