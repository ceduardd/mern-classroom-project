import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Pedro Perez',
    email: 'pepe76@outlook.es',
    password: bcrypt.hashSync('123456', 10),
    isEducator: true,
  },
  {
    name: 'Rodrigo Cuesta',
    email: 'rcuesta_96@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Carlos Fernandez',
    email: 'carlosfernandez@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Lorena Arteta',
    email: 'loarteta@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
