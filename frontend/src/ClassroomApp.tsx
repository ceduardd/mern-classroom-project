import React from 'react';
import CourseLists from './screens/CourseLists';
import Header from './components/Header';
import Footer from './components/Footer';

import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './screens/SignIn';

const ClassroomApp = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={CourseLists} exact />
          <Route path="/login" component={SignIn} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default ClassroomApp;
