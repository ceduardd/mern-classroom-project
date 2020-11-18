import React from 'react';

import { Lessons } from '../interfaces/Course';

const LessonItem = ({ title, content, urlResource }: Lessons) => {
  return (
    <>
      <h2>{title}</h2>
      <hr />
      <p>{content}</p>
      <a href={urlResource}>
        <i className="fas fa-link mr-2"></i>Recurso de Lectura
      </a>
    </>
  );
};

export default LessonItem;
