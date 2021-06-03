const express = require('express');
const multer = require('multer');
const fs = require('fs');
const dest = __dirname + '/public/uploads/'
const upload = multer({ dest: dest });
const type = upload.single('upl');
const { uploadToCloudinary } = require('../../lib/cloudinary');



const router = express.Router();

function base64_decode(base64String, file) {
    let base64Image = base64String.split(';base64,').pop();
   const picture = fs.writeFile(file, base64Image, { encoding: 'base64' }, async (err) => {
        console.log('1', file);
    });
}


router.post('/', type, async (req, res) => {

    const picture = base64_decode(req.body.file, dest + 'file.jpg')
    console.log(picture)
    // const result = await uploadToCloudinary(picture)

})

module.exports = router;