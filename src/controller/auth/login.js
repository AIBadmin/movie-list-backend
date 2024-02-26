import { successRes, errorRes } from "../../helper/index.js";
import db from "../../model/index.js";
import { createAccessToken } from "../../helper/index.js";
import Validator from "validatorjs";
import bcrypt from "bcrypt";

const USER = db.user;
const USERSESSION = db.userSession;

const login = async (req, res) => {
      const validation = new Validator(req.body, {
        email: "required",
        password: "required",
    });

    if (validation.fails()) 
        return errorRes(res, 400, Object.values(validation.errors.errors)[0][0]);

  try {
    const { email, password } = req.body;

    const user = await USER.findOne({
        where: {
            email: email
        }
    });

    // console.log("user",user)

    if (!user) {
        return errorRes(res, 1004); 
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return errorRes(res, 1005); 
    }
    // console.log("passwordMatch",passwordMatch)

    const accessToken = await createAccessToken({
        user_id: user.id,
        email: user.email,
    });
    // console.log("accessToken",accessToken)

    const userSession = await USERSESSION.create({
        user_id: user.id,
        token: accessToken
    });
    // console.log("userSession",userSession)

    return successRes(res, 1002, { token: accessToken }); 
} catch (error) {
    console.log("error", error);
    return errorRes(res, 9999, error); 
}
};


export default login;
