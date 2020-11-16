import React from 'react';
import CourseLists from './screens/CourseLists';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './screens/SignIn';

const ClassroomApp = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={CourseLists} />
          <Route path="/login" component={SignIn} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default ClassroomApp;
