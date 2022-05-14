import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
      fname: req.body.fname,
      lname: req.body.lname,
      addressline1: req.body.addressline1,
      city: req.body.city,
    });

    await newUser.save();
    res
      .status(200)
      .send("Welcome User 😍, your account has been created successfully!!");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    // user does not exist
    if (!user) return next(createError(404, "😯 User Not Found!!"));

    // check password
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // incorrect password
    if (!isPasswordCorrect)
      return next(
        createError(400, "Oops!! 😵 Username or Password Not Correct.")
      );

    // jwt token
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    // hiding password and isAdmin
    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
