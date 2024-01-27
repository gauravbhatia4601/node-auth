// middleware/fileUpload.js

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const awsConfig = require('../aws-config');

aws.config.update({
  accessKeyId: awsConfig.accessKeyId,
  secretAccessKey: awsConfig.secretAccessKey,
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'your-s3-bucket-name',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '-' + file.originalname);
    },
  }),
});

module.exports = upload;
