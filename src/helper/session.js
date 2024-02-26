import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import UserSession from "../model/userSessionModel.js"

const createAccessToken = async (data)=>{
    return jwt.sign(data,config.jwt.secretKey,{expiresIn:config.jwt.expiryTime})
}

const verifyToken = (token) => {
    let value;
    try {
        value = jwt.verify(token, config.jwt.secretKey)
    } catch (error) {
        console.log('JWT error :>> ', error);
        value = null;
    }
    return value;

}

const destroySession = async (data) => {
    let response = {};
    try {
      const result = await UserSession.destroy({
        where: {
          [Op.or]: [
            { user_id: data },
            { token: data }
          ]
        },
        force: true
      });
  
      if (result === 0) {
        throw new Error('No session found to destroy');
      }
      response.status = true;
      response.message = "Session destroyed";
    } catch (error) {
      console.error(error);
      response.status = false;
      response.message = error.message;
    }
    return response;
  };

  const getImageUrl = (fileName) => {
        console.log('config.static_url + fileName', config.static_url + fileName)
    return config.static_url + fileName;
}

export { getImageUrl,createAccessToken, verifyToken ,destroySession}