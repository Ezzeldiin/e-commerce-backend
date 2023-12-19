import multer from "multer";
import { nanoid } from "nanoid";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { apiError } from "../middleware/errorHandle.js";
// export const createPathName = () => {
//   return (req, res, nex) => {
//     const __dirname = path.dirname(fileURLToPath(import.meta.url));
//     const { destination } = req.headers;
//     if (!destination) {
//       const newDestination = nanoid();
//       const fullPath = `d:/upload/${newDestination}`;
//       if (!fs.existsSync(fullPath)) {
//         fs.mkdirSync(fullPath, { recursive: true });
//       }
//       req.headers.destination = newDestination;
//       pathName = fullPath;
//     } else {
//       const fullPath = `d:/upload/${destination}`;
//       if (!fs.existsSync(fullPath)) {
//         fs.mkdirSync(fullPath, { recursive: true });
//       }
//       pathName = fullPath;
//     }
//     nex();
//   };
// };

export const multerValidation = {
  image: ["image/png", "image/jpeg", "image/jif"],
  pdf: ["application/pdf"],
};

export const HME = () => {
  return (err, req, res, nex) => {
    // console.log(err);
    if (err) nex(new apiError("multer error", 500));
  };
};
export const myMulter = (customValidation) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const __dirname = path.dirname(fileURLToPath(import.meta.url));
      const pathName = path.join(__dirname, "../../upload");
      cb(null, pathName);
    },
    filename: (req, file, cb) => {
      const imageType = file.mimetype.split("/")[1];
      cb(null, `${Date.now()}-${nanoid()}.${imageType}`);
    },
  });
  const fileFilter = (req, file, cb) => {
    if (customValidation.includes(file.mimetype)) cb(null, true);
    else cb("in-valid format", false);
  };
  const upload = multer({ dest: "upload", fileFilter, storage });
  return upload;
};
