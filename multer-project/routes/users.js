var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
// multer 모듈 추가하기
const multer = require('multer');

//multer의 역할 : 파일을 가져와서 req에 file/files 속성을 추가해줘서 다음으로 넘겨준다. 
const upload = multer({
  dest:'uploads/' // 파일 저장위치 지정
});

// controller 연결
const UserController = require('../controllers/userControllers');

router.post('/profile',upload.single('image'),UserController.uploadProfile);
router.post('/selfies',upload.array('image',4),UserController.uploadImages);

module.exports = router;
