import TabelDb from "../models/Auth.Model.js";
import { Op } from "sequelize";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

export const getUser = async (req, res) => {
  try {
    const respon = await TabelDb.findAll();
    res.status(200).json(respon);
  } catch (error) {
    console.log(error);
  }
};

export const register = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  if (username.length <= 6) {
    res.status(401).json({ msg: "username minimal 7 karakter!" });
    return;
  }
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    res.status(401).json({ msg: "Format email tidak valid!" });
    return;
  }
  const existingUser = await TabelDb.findOne({
    where: {
      [Op.or]: [{ username }, { email }],
    },
  });
  if (existingUser) {
    res.status(401).json({ msg: "Username atau email sudah digunakan!" });
    return;
  }
  if (password.length <= 6) {
    res.status(401).json({ msg: "Password minimal 7 karakter!" });
    return;
  }
  if (password !== confirmPassword) {
    res.status(401).json({ msg: "Password dan Confirm Password tidak sesuai!" });
    return;
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await TabelDb.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "60s",
    });
    res.status(201).json({ token, msg: "Anda berhasil register" });
  } catch (error) {
    res.status(500).json({ msg: "Anda gagal Register!" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    res.status(401).json({ msg: "Format email tidak valid!" });
    return;
  }
  try {
    const user = await TabelDb.findOne({ where: { email } });
    if (!user) {
      res.status(401).json({ msg: "Email belum terdaftar!" });
      return;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ msg: "Password salah!" });
      return;
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "60s",
    });
    res.status(200).json({ token, msg: "Anda berhasil login" });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ msg: "Anda gagal login karena kesalahan internal sistem. Silakan coba lagi nanti." });
  }
};
