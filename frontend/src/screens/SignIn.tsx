import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import useForm from '../hooks/useForm';

const SignIn = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [values, changeValues, resetValues] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = values;

  const signIn = async () => {
    const { data } = await axios.post('http://localhost:4000/api/signin', {
      email,
      password,
    });

    // console.log(data);

    localStorage.setItem('x-access-token', data.token);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signIn();
    resetValues();
  };

  return (
    <section className="mt-4">
      <Row>
        <Col xs={10} md={6} lg={4} className="mx-auto">
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
    </section>
  );
};

export default SignIn;
