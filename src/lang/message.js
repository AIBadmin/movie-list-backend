const MESSAGE = {
  1001: "User registered successfully!",
  1002: "User login is successful!",
  1003: "User already exist!",
  1004: "User not found!",
  1005: "Password does not match!",

  1006: "Movie created successfully",
  1007: "Movielist retrieved successfully",
  1008: "Movie updated successfully",
  1009: "Movie not found",
  1000: "Movie Get successfully",

  9999: "Something went wrong.",
};

export default (messageCode) => {
  if (messageCode) {
    return MESSAGE[messageCode];
  } else {
    return messageCode;
  }
};
