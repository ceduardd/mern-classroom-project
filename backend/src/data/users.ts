import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Pedro Perez',
    email: 'pedroperez@example.com',
    password: bcrypt.hashSync('123456', 10),
    isEducator: true,
  },
  {
    name: 'Rodrigo Cuesta',
    email: 'rodrigocuesta@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Carlos Fernandez',
    email: 'carlosfernandez@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jhon Doe',
    email: 'jhondoe@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
