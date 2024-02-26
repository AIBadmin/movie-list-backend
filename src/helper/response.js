import getMessage from '../lang/message.js'

const successRes =(res,messageCode,data=null)=>{
    let response ={
        status:true,
        message:getMessage(messageCode)
    }
    if(data)response.data=data;

    return res.status(200).json(response);
}
const errorRes =(res,messageCode,error=null,errorCode=422)=>{
    let response ={
        status:false,
        message:getMessage(messageCode)
    }
    if(error)response.error=error;
console.log("response",response);
    return res.status(errorCode).json(response);
}

export {successRes,errorRes};
