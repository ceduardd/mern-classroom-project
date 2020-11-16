import React from 'react';
import { Badge, Card } from 'react-bootstrap';

import Course from '../interfaces/Course';

const CourseItem = ({ name, image, description, category }: Course) => {
  return (
    <Card className="mb-3">
      <Card.Img src={image} alt={name} variant="top" />
      <Card.Body className="p-4">
        <Card.Title className="text-primary">{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Badge pill variant="secondary" className="p-2">
          # {category}
        </Badge>
      </Card.Body>
    </Card>
  );
};

export default CourseItem;
