var express = require("express");
var fileUpload = require("express-fileupload");
var cloudinary = require("./cloudinary");

var port = 3000;
var app = express();

// use middleware for grant access upload
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// register route (single)
app.post("/upload/single", (req, res) => {
  const { photo } = req.files;

  if (!photo) {
    return res.status(400).json({ status: 400, message: "Photo is required" });
  }

  cloudinary.v2.uploader.upload(
    photo.tempFilePath,
    { public_id: new Date().getTime() },
    (error, result) => {
      if (error) {
        return res.status(500).json({ status: 500, message: "Upload failed", error });
      } else {
        return res.json({ status: 200, message: "Success", result });
      }
    }
  );
});

// register route (multiple)
app.post("/upload/multiple", (req, res) => {
  const files = req.files.photos; // Nama field input pada Postman harus 'photos'

  if (!files || files.length === 0) {
    return res.status(400).json({ status: 400, message: "Photos are required" });
  }

  const filesArray = Array.isArray(files) ? files : [files];

  Promise.all(
    filesArray.map(file => {
      return cloudinary.v2.uploader.upload(file.tempFilePath, {
        public_id: new Date().getTime(),
      });
    })
  )
    .then(results => {
      res.json({
        status: 200,
        message: "Files uploaded successfully",
        results,
      });
    })
    .catch(error => {
      res.status(500).json({ status: 500, message: "Upload failed", error });
    });
});

// running apps
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
