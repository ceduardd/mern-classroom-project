import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useLogin } from '../LoginProvider';

const SignUp = () => {
  const loginState = useLogin();

  const [values, changeValues, resetValues] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = values;

  const history = useHistory();

  const signUp = async () => {
    const { data } = await axios.post('http://localhost:4000/api/auth/signup', {
      name,
      email,
      password,
    });

    console.log(data);

    loginState?.login(data.token);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signUp();
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
                  Registrarse
                </p>
              </Card.Title>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={changeValues}
                  />
                </div>
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
                  Registrarse
                </Button>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignUp;
