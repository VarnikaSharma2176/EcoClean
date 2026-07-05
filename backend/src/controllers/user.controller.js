export const getProfile = async (req, res) => {
  const user = req.user;

  res.status(200).json({
    success: true,
    message: "Profile fetched successfully.",
    data: {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      role: user.role,
      accountType: user.accountType,
      organizationName: user.organizationName,
      rewardPoints: user.rewardPoints,
      profileImage: user.profileImage,
      isEmailVerified: user.isEmailVerified,
      addresses: user.addresses,
      createdAt: user.createdAt,
    },
  });
};