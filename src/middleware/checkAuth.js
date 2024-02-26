import { successRes, errorRes } from "../helper/index.js";
import { verifyToken, destroySession } from "../helper/index.js";
import db from "../model/index.js";
const User = db.user;
const UserSession = db.userSession;

const checkAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization?.split("Bearer ")[1] || null;

    // console.log("Token:", token);

    if (!token) {
      return errorRes(res, "unauthorized");
    }
    let decode = verifyToken(token);

    // console.log("Decoded token:", decode);

    if (!decode) {
      await destroySession(token);
      return errorRes(res, "unauthorized");
    }
    const isAuth = await UserSession.findOne({
      where: {
        token
      },
      attributes: ["user_id"],
    });

    // console.log("UserSession:", isAuth);

    if (!isAuth) {
      return errorRes(res, "unauthorized");
    }

    const user = await User.findOne({
      where: {
        id: isAuth.user_id
      },
    });
    // console.log("User:", user);

    if (!user) {
      return errorRes(res, "unauthorized");
    }
    req.user = user.toJSON();
    next();
  } catch (error) {
    console.error(error);
    return errorRes(res, "unauthorized");
  }
};

export { checkAuth };
