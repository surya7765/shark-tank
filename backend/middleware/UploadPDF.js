import path from "path";
import multer from "multer";
// const __dirname = path.resolve();
// console.log(path.join(__dirname, "./uploads/"));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    let baseName = path.basename(file.originalname, ext);
    cb(null, (baseName + Date.now() + ext).replace('-', ''));
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    if (file.mimetype === 'application/pdf') {
      // console.log(file);
      callback(null, true);
    } else {
      console.log("nla");
      callback(null,false);
    }
  },
});

export default upload;
