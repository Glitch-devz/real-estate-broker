import multer from "multer";
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `src/assets/${req.params.type}`);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        "-land-" +
        req.params.landid +
        "-" +
        Date.now() +
        "." +
        file.originalname.split(".").pop()
    );
  },
});
const uploadMiddleware = multer({ storage: storage }).single("file");
export default uploadMiddleware;
