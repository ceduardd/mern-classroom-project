import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    const { data } = await axios.post('http://localhost:5000/api/signin', {
      email,
      password,
    });

    // console.log(data);

    localStorage.setItem('x-access-token', data.token);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signIn();
  };

  return (
    <section>
      <Row>
        <Col md={4} className="mx-auto">
          <Card className="mt-4 p-4">
            <Card.Title>
              <p className="text-center text-primary font-weight-bold h1">
                Login
              </p>
            </Card.Title>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Type your email..."
                  autoComplete="off"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Type your password..."
                  autoComplete="off"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="btn-block">
                Sign In
              </Button>
            </form>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default SignIn;
