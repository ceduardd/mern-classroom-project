import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Course, { Lessons } from '../interfaces/Course';
import LessonItem from '../components/LessonItem';

const CourseScreen = () => {
  const { courseId } = useParams<any>();

  const [course, setCourse] = useState<Course>();
  const [currentLesson, setCurrentLesson] = useState<Lessons>();

  useEffect(() => {
    const loadCourse = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/api/courses/${courseId}`
      );

      setCourse(data);
    };
    loadCourse();
  }, [courseId]);

  useEffect(() => {
    setCurrentLesson(course?.lessons[0]);
  }, [course]);

  const changeLesson = (lessonId: string) => {
    const lessonFound = course?.lessons.find(lesson => lesson._id === lessonId);

    setCurrentLesson(lessonFound);
  };

  return (
    <section className="mt-4">
      <Container>
        <h1>{course?.name}</h1>
        <p className="text-muted mb-4">{course?.description}</p>

        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Header className="h5 font-weight-bold text-success d-flex align-items-center">
                <i className="fas fa-list mr-2"></i>Contenidos
              </Card.Header>
              <ListGroup variant="flush">
                {course?.lessons.map(lesson => (
                  <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    key={lesson._id}
                    onClick={() => changeLesson(lesson._id)}
                  >
                    {lesson.title}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>

          <Col md={8}>{currentLesson && <LessonItem {...currentLesson} />}</Col>
        </Row>
      </Container>
    </section>
  );
};

export default CourseScreen;
