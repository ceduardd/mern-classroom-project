import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Course from '../interfaces/Course';

const CourseItem = ({ _id, name, image, description, category }: Course) => {
  return (
    <Card className="mb-3">
      <Link to={`courses/${_id}`}>
        <Card.Img src={image} alt={name} variant="top" />
      </Link>
      <Card.Body className="p-4">
        <Link to={`courses/${_id}`}>
          <Card.Title className="text-primary">{name}</Card.Title>
        </Link>
        <Card.Text>{description}</Card.Text>
        <Badge pill variant="secondary" className="p-2">
          # {category}
        </Badge>
      </Card.Body>
    </Card>
  );
};

export default CourseItem;
