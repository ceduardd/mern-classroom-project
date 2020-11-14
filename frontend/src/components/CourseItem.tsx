import React from 'react';
import { Card } from 'react-bootstrap';

import Course from '../interfaces/Course';

const CourseItem = ({ name, image, description, category }: Course) => {
  return (
    <Card className="my-3">
      <Card.Img src={image} alt={name} variant="top" />
      <Card.Body className="p-4">
        <Card.Title className="text-primary">{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <span className="badge badge-secondary p-2">{category}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CourseItem;
