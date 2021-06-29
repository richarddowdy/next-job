// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/index.js
import prisma from "../../../lib/prisma";
import { compareSync } from "bcryptjs";
const jwt = require("jsonwebtoken");

import { JWT_KEY } from "./register";

export default async (req, res, next) => {
  // Require POST
  if (req.method !== "POST") {
    res.status(400).json({ message: "Only POST requests allowed" });
    return;
  }

  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (!user) {
      return res.status(403).json({ message: "Username or password incorrect." });
    }

    const isValid = await compareSync(password, user.password);

    if (!isValid) {
      return res.status(403).json({ message: "Username or password incorrect." });
    }

    delete user.password;

    const token = jwt.sign(user, JWT_KEY);

    return res.status(200).json({ success: isValid, token });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
};
