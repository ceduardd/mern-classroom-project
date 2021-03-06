import React from 'react';
import axios from 'axios';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { useForm } from '../hooks/useForm';
import { useLogin } from '../LoginProvider';

const SignIn = () => {
  const loginState = useLogin();

  const history = useHistory();

  const [values, changeValues, resetValues] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = values;

  const signIn = async () => {
    const { data } = await axios.post('http://localhost:4000/api/auth/signin', {
      email,
      password,
    });

    console.log(data);

    loginState?.login(data.token);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signIn();
    resetValues();
    history.push('/home');
  };

  return (
    <section className="mt-4">
      <Container>
        <Row>
          <Col md={8} lg={6} className="mx-auto">
            <Card className="p-4">
              <Card.Title>
                <p className="text-center text-primary font-weight-bold h1">
                  Iniciar Sesión
                </p>
              </Card.Title>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email@example.com"
                    autoComplete="off"
                    value={email}
                    onChange={changeValues}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Contraseña"
                    autoComplete="off"
                    value={password}
                    onChange={changeValues}
                  />
                </div>
                <Button type="submit" className="btn-block">
                  Iniciar Sesión
                </Button>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignIn;
