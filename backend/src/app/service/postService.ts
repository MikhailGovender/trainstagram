import { Request, Response, NextFunction, response } from "express";
import { PostRepository } from "../../infrastructure/repositories/PostRepository";
import { ErrorHandler } from "../helpers/ErrorHandler";
import {convertDateToSqlDateTimeOffset} from "../helpers/DateFormatter"

import * as fs from "fs";

export const postMedia = async (req: any, res: Response, next: NextFunction) => {
  if (req.body != null && req.file != null) {
    const image = req.file;

    const repository = new PostRepository();

    fs.readFile(image.path, async (err, data: Buffer) => {
    if (err) {
      console.error('Error reading file:', err.message);
      res.sendStatus(500);
    } else {
        //Need to add the image data to the request.
        let request = req.body;
        request.userID = 1;
        request.Image = data;
        request.PostedAt = convertDateToSqlDateTimeOffset(new Date())
        
        const result = await repository.create(request);
        console.log(result);
        
        if (!result) {
            return next(new ErrorHandler('Failed to create post', 400));
        }

        res.status(200).json({
            success: true
        });

        fs.unlink(image.path, (err) => {
            if (err) {
              console.error('Error deleting file:', err);
            } else {
              console.log('File deleted successfully!');
            }
          });
    }
  }); 
  }
}

export const getMedia = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new PostRepository();
    const id : any = req.params.id;
    const result = await repository.readByID(id);
    console.log(result);
    
    if (!result) {
        return next(new ErrorHandler('Post not found!', 404));
    }
    
    result.Image = (result.Image != null)?result.Image.toString('base64'):'N/A';
    res.status(200).send({
        success: true,
        post: {
            Caption: result.Caption,
            Likes: result.Likes,
            PostedAt: result.PostedAt,
            Image: result.Image
        },
    });
}

export const getAllMedia = async (req: Request, res: Response, next: NextFunction) => {
    const repository = new PostRepository();
    const result = (req.params.id != null)?await repository.readAll(parseInt(req.params.id)): await repository.readAllUser(1);
    console.log(result);
    
    if (!result) {
        return next(new ErrorHandler('Post not found!', 404));
    }
    
    for (const post of result) {
        post.Image = (post.Image != null)?post.Image.toString('base64'):'N/A';

    }
    res.status(200).send({
        success: true,
        post: result,
    });
}