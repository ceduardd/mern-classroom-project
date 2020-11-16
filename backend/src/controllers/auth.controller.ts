import User, { IUser } from '../models/userModel';
import { RequestHandler } from 'express';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

import config from '../config';
import { matchPassword, encryptPassword } from '../lib/bcrypt';

export const signIn: RequestHandler = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exist
  const userFound = await User.findOne({ email });

  if (!userFound) return res.json({ message: 'User not found' });

  // Check is valid password
  const validPassword = await matchPassword(password, userFound.password);

  if (!validPassword)
    return res.json({ message: 'Password provided is invalid' });

  // Generating token
  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400,
  });

  res.json({ token });
});

export const signUp: RequestHandler = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if the email is already in use
  const userFound = await User.findOne({ email });

  if (userFound) return res.json({ message: 'Email provided already exist' });

  // Saving new user
  const newUser: IUser = new User({
    name,
    email,
    password: await encryptPassword(password),
  });

  const userSaved = await newUser.save();

  // Generating token
  const token = jwt.sign({ id: userSaved._id }, config.SECRET, {
    expiresIn: 86400,
  });

  res.json({ token });
});
