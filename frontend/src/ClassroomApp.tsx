import React from 'react';
import CourseLists from './components/CourseLists';
import Header from './components/Header';

import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

const ClassroomApp = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <CourseLists />
        </Container>
      </main>
    </Router>
  );
};

export default ClassroomApp;
