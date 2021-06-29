// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/index.js
import prisma from "../../../lib/prisma";
import { hashSync } from "bcryptjs";
const jwt = require("jsonwebtoken");

export const BCRYPT_WORK_FACTOR = 12;
export const JWT_KEY = process.env.JWT_KEY;

export default async (req, res, next) => {
  // Require POST
  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" });
    return;
  }

  const { username, password } = req.body;

  try {
    // Check if username already exists
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (user) {
      return res.status(400).json({ success: false, message: "That username already exits." });
    }

    const hashedPass = hashSync(password, BCRYPT_WORK_FACTOR);

    const userData = {
      username,
      password: hashedPass,
    };

    const newUser = await prisma.user.create({
      data: userData,
    });

    delete newUser.password;

    const token = jwt.sign(newUser, JWT_KEY);

    console.log(newUser);

    res.status(200).json({ success: true, token });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
};
