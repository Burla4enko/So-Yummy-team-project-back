const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
require('dotenv').config();

const { CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'avatars',
  allowedFormats: ['jpg', 'png'],
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const storageRecipe = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    return {
      folder: 'recipe',
      // format: ['jpg', 'png'],
      public_id: file.originalname,
      // transformation: [
      //   {
      //     height: 300,
      //     width: 300,
      //     crop: 'fill',
      //   },
      // ],
    };
  },
});

const uploadCloud = multer({ storage });
const uploadCloudRecipe = multer({ storage: storageRecipe });

module.exports = { uploadCloud, uploadCloudRecipe };
