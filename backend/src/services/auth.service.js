import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const registerUserService = async (userData) => {
  const {
    fullName,
    email,
    phone,
    password,
    accountType,
    organizationName,
  } = userData;

  const existingEmail = await User.findOne({ email });

  if (existingEmail) {
    throw new Error("Email already registered.");
  }

  const existingPhone = await User.findOne({ phone });

  if (existingPhone) {
    throw new Error("Phone number already registered.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    fullName,
    email,
    phone,
    password: hashedPassword,
    accountType,
    organizationName:
      accountType === "organization"
        ? organizationName
        : "",
  });

  return user;
};