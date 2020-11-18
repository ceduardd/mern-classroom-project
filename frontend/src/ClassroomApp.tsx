import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginProvider from './LoginProvider';

const ClassroomApp = () => {
  return (
    <LoginProvider>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/home" component={HomeScreen} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </LoginProvider>
  );
};

export default ClassroomApp;
