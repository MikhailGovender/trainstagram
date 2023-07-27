//Used as middleware to get the image from the request.
import { Request } from "express";
import multer, { FileFilterCallback } from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req: Request, file: Express.Multer.File, cb: any) {
      cb(null,'uploads/' )
    },
    filename: function (req: Request, file: Express.Multer.File, cb: any) {
      const uniqueSuffix : string = new Date().toISOString().replace(/:/g, "-").replace(/T/, "_") + `_0${1}`;
      const fileName : string = uniqueSuffix + path.extname(file.originalname);
      cb(null, fileName)
    }
  });
  
export const RetrieveFile = multer({ 
    storage: storage,
    limits: {fileSize: 1000000},
    fileFilter: (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
      const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      if (allowedMimeTypes.includes(file.mimetype)) {
        // Accept the file
        callback(null, true);
      } else {
        // Reject the file
        callback(new Error('Invalid file type. Only JPEG, PNG, and JPG images are allowed.'));
      }
    },
}).single('picture')