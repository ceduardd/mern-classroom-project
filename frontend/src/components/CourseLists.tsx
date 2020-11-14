import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CourseItem from './CourseItem';

const CourseLists = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const { data } = await axios.get('http://localhost:4000/courses');
      setCourses(data);
    };

    getCourses();
  }, []);

  return (
    <section>
      <h1 className="my-3">Cursos</h1>

      {courses.map(course => (
        <CourseItem {...course} />
      ))}
    </section>
  );
};

export default CourseLists;
