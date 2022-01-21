const defaultRes = require("../module/utils/utils");
const statusCode = require("../module/utils/statusCode");
const resMessage = require("../module/utils/responseMessage");
var multer = require('multer');

module.exports = {
    uploadProfile : async (req, res)=>{
        const image = req.file.path;
        console.log(req.file)
        if(image === undefined){
            return res.status(400).send(defaultRes.successFalse(statusCode.NO_CONTENT),resMessage.NULL_VALUE);
        }
        res.status(200).send(defaultRes.successTrue(statusCode.OK, resMessage.INPUT_SUCCESS));
    }
}

