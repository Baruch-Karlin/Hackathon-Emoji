const express = require('express');
const fs = require('fs');
const { uploadToCloudinary } = require('../../lib/cloudinary');
const mongoose = require('mongoose');
const { upload } = require('../../middlewares/imageUpload');
const { classify } = require('../../lib/axios')

const Picture = require('./mongoose_model/picture_model');
const Emoji = require('../../routes/emoji/mongoose_schema/emoji');


const convertIdsToUrls = (arrOfIds) => {
    const promises = arrOfIds.map(async (id) => {
        console.log('1',arrOfIds, '2', id);
        const emoji = await Emoji.findById(id);
        console.log('4', emoji)
        return emoji.url
    });
    console.log('6', promises)
    return Promise.all(promises);
}


const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Hello world from pictures`);
});

router.post('/',
    upload.single('picture-uploaded'),
    async (req, res, next) => {
        try {
            let arrayOfUrls = []
            console.log('enter')
            const result = await uploadToCloudinary(req.file.path)
            if (result) {
                const picture = new Picture({
                    _id: new mongoose.Types.ObjectId(),
                    url: result.secure_url
                })
                console.log(picture)
                await picture.save();

                //this is the real function 
                // const arrayOfIds = classify(result.secure_url)
                // const arrayOfEmojiUrls = arrayOfIds.map( async (id) => {
                //     const emoji =  await Emoji.findById(id);
                //     return emoji.url
                // })

                //this is the mock function
                const mockIds = ['60b762535a65a88892b60d70', '60b762ab5a65a88892b60d71', '60b762d75a65a88892b60d72'];
                arrayOfUrls = await convertIdsToUrls(mockIds);
                console.log(arrayOfUrls)
            }

            fs.unlinkSync(req.file.path)
            res.status(200).send(arrayOfUrls);
        } catch (err) {
            console.log(err);
        }
    }
);

module.exports = router;