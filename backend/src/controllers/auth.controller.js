import { registerUserService } from "../services/auth.service.js";

export const registerUser = async (req, res) => {
  try {
    const user = await registerUserService(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully.",
      data: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      errors: [],
    });
  }
};

export const loginUser = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Login API coming next.",
    data: {},
  });
};