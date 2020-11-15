import jwt from 'jsonwebtoken';
import { RequestHandler } from 'express';
import User from '../models/userModel';
import { matchPassword, encryptPassword } from '../lib/bcrypt';
import config from '../config';
import asyncHandler from 'express-async-handler';

export const signIn: RequestHandler = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userFound: any = await User.findOne({ email });

  if (!userFound) return res.json({ message: 'email or password incorrect' });

  const validPassword = await matchPassword(password, userFound.password);

  if (!validPassword)
    return res.json({ message: 'email or password incorrect' });

  const token = jwt.sign({ id: userFound._id }, 'MERN_APP_SECRET', {
    expiresIn: 86400,
  });

  res.json({ token });
});

export const signUp: RequestHandler = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userFound = await User.findOne({ email });

  if (userFound) return res.json({ message: 'email repetido' });

  const newUser = new User({
    name,
    email,
    password: await encryptPassword(password),
  });

  const userSaved = await newUser.save();

  const token = jwt.sign({ id: userSaved._id }, 'MERN_APP_SECRET', {
    expiresIn: 86400,
  });

  res.json({ token });
});
