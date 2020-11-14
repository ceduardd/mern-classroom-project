import React from 'react';
import { Card } from 'react-bootstrap';

import Course from '../interfaces/Course';

const CourseItem = ({ name, description, category }: Course) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>{description}</p>
          <span className="text-muted">{category}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CourseItem;
