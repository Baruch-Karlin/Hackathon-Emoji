const express = require('express')
const mongoose = require('mongoose');
const Picture = require('../Backend/routes/pictures/mongoose_model/picture_model');
const { classify } = require('./lib/axios')
const { uploadToCloudinary } = require('../Backend/lib/cloudinary');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const app = express()

const dest = __dirname + '/public/uploads/'

const base64_decode = async (base64String, file) => {
  let base64Image = base64String.split(';base64,').pop();
  fs.writeFile(file, base64Image, { encoding: 'base64' }, function (err) {
    console.log('working')
  });
}

app.use(cors({ origin: true }));

const upload = multer({ dest: dest });
const type = upload.single('upl');


app.post('/images', type, async (req, res) => {
  try {
    const path = dest + 'file.jpg'
    console.log(path)
    const picture = await base64_decode(req.body.file, path)
    const result = await uploadToCloudinary('public/uploads/file.jpg')
    console.log(result)

    if (result) {
      const picture = new Picture({
        _id: new mongoose.Types.ObjectId(),
        url: result.secure_url
      })

      console.log(picture)
      const db = await picture.save();
      console.log(db)

      const arrayOfIds = await classify(result.secure_url)
      console.log(arrayOfIds)
      res.status(200).send(arrayOfIds)
    }
  } catch {

  }
})

const port = 3003;
const host = '127.0.0.1'
const db_url = 'mongodb+srv://emoji:emoji@cluster0.0ykin.mongodb.net/emoji?retryWrites=true&w=majority';


mongoose.connect(db_url,
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then((response) => {
    console.log('your data base is ' + response.connections[0].name)
    app.listen(port, host, () => {
      console.log(`the server is listening at http://${host}:${port}`);
    });
  });