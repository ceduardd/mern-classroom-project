import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import CourseItem from '../components/CourseItem';
import Course from '../interfaces/Course';

const CourseLists = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const getCourses = async () => {
      const { data } = await axios.get('http://localhost:5000/api/courses');
      setCourses(data);
    };

    getCourses();
  }, []);

  return (
    <section>
      <h1>Cursos disponibles</h1>

      <Row>
        {courses.map(course => (
          <Col key={course._id} md={4}>
            <CourseItem {...course} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default CourseLists;
