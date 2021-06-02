const express = require('express');
const fs = require('fs');
const { uploadToCloudinary } = require('../../lib/cloudinary');
const mongoose = require('mongoose');
const { upload } = require('../../middlewares/imageUpload');

const Picture = require('./mongoose_model/picture_model');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Hello world from pictures`);
});


router.post('/',
    upload.single('picture-uploaded'),
    async (req, res, next) => {
        try {
            console.log('enter')
            const result = await uploadToCloudinary(req.file.path)
            if (result) {
                console.log(result)
                const picture = new Picture({
                    _id: new mongoose.Types.ObjectId(),
                    url: result.secure_url
                })
                console.log(picture)
                await picture.save();
            }
            fs.unlinkSync(req.file.path)
            res.status(200).send('ok');
        } catch (err) {
            console.log(err);
        }
    }
);

module.exports = router;