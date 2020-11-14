import User from './models/userModel';
import Course from './models/courseModel';

import users from './data/users';
import courses from './data/courses';

import './database';

const importData = async () => {
  try {
    await User.deleteMany({});
    await Course.deleteMany({});

    const createdUsers = await User.insertMany(users);

    const [educatorUser] = createdUsers;

    const sampleCourses = courses.map(course => ({
      ...course,
      instructor: educatorUser._id,
    }));

    await Course.insertMany(sampleCourses);

    console.log('Data imported!');
  } catch (error) {
    console.error(error);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany({});
    await Course.deleteMany({});
  } catch (error) {
    console.error(error);
  }
};

if (process.argv[2] === '--destroy') {
  destroyData();
} else {
  importData();
}
