const express = require('express')
const multer = require('multer');
const path = require('path');

const router = express.Router();

const fileController = require("../controllers/fileController")
const {authorization} = require("../middleware/authMiddleware")


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 's3/') 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });


router.post("/put",authorization, upload.single('file'), fileController.uploadfile);
router.get("/:fileId", authorization, fileController.getFile);


module.exports = router;