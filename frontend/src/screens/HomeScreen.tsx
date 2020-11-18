import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import CourseItem from '../components/CourseItem';
import HomeCarousel from '../components/HomeCarousel';
import Course from '../interfaces/Course';

const HomeScreen = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const getCourses = async () => {
      const { data } = await axios.get('http://localhost:4000/api/courses');
      setCourses(data);
    };

    getCourses();
  }, []);

  return (
    <section>
      <HomeCarousel />

      <Container>
        <h1 className="my-4">Cursos disponibles</h1>

        <Row>
          {courses.map(course => (
            <Col key={course._id} md={4}>
              <CourseItem {...course} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HomeScreen;
