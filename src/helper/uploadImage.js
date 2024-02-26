import fs from "fs";
import path from "path";
import randToken from "rand-token";

function isArrayDefine(fileObjArray) {
    if (typeof fileObjArray !== 'undefined' && fileObjArray.length > 0) {
        return true;
    }
    return false;
}

function uploadImage(fileObjArray, pathFolder, fieldname) {
    // let uploadedFile = null;
    let filePath = null;
    for (let index = 0, len = fileObjArray.length; index < len; ++index) {
        if (fileObjArray[index].fieldname === fieldname) {
            if (isArrayDefine(fileObjArray)) {
                let uploadedFile = randToken.uid(16) + path.extname(fileObjArray[index].originalname);
                filePath = `/${pathFolder}/${uploadedFile}`;
                let uploadPath = `./uploads/${pathFolder}/${uploadedFile}`;
                if (!fs.existsSync(`./uploads/${pathFolder}`)) {
                    fs.mkdirSync(`./uploads/${pathFolder}`, {
                        recursive: true
                    });
                }
                let outStream = fs.createWriteStream(uploadPath);
                outStream.write(fileObjArray[0].buffer);
                outStream.end();
            }
        }
    }
    return filePath;
}

 export {uploadImage};
