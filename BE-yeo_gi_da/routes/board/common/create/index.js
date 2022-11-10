const router = require('express').Router();
const message = require('../../../../utils/message')
const boardController = require('../../../../controllers/board')

const{ upload } = require("../../../../utils/multer");
const { application } = require('express');

router.post("/upload", upload.single("picture"), async (req, res) =>{

    const imgfile = req.file;
    console.log(imgfile);
})

router.post('/',boardController.create)


module.exports = router