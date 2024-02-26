import { successRes, errorRes } from "../../helper/index.js";
import db from "../../model/index.js";
import Validator from "validatorjs";
import { bcryptPassword, createAccessToken } from "../../helper/index.js";

const USER = db.user;
const USERSESSION = db.userSession;

const register = async (req, res) => {
  const validation = new Validator(req.body, {
    email: "required",
    password: "required",
  });

  if (validation.fails())
    return errorRes(res, 400, Object.values(validation.errors.errors)[0][0]);

  try {
    const { firstName, lastName, email, password } = req.body;

    let checkUser = await USER.findAll({
      where: {
        email: email,
      },
    });
    if (checkUser.length >= 1) {
      return errorRes(res, 1003);
    }

    let data = {
      firstName,
      lastName,
      email,
      password: await bcryptPassword(password),
    };

    let createUser = await USER.create(data);
    let UserSessionData = {
      user_id: createUser.id,
      token: await createAccessToken({
        user_id: createUser.id,
        email: createUser.email,
      }),
    };

    let createUserSession = await USERSESSION.create(UserSessionData);

    return successRes(res, 1001, createUserSession);
  } catch (error) {
    return errorRes(res, 9999, error);
  }
};

export default register;
