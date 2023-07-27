import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../../infrastructure/repositories/UserRepository.ts";
import { ErrorHandler } from "../helpers/ErrorHandler.ts";

export const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
    //TODO: validation goes here
    const repository = new UserRepository();
    console.log('req.body.id: ', req.body.id);
    const user = repository.readByID(req.body.id);

    if(!user) {
        return next(new ErrorHandler('User Profile not found', 404));
    }

    res.status(200).send({
        success: true,
        user: user
    });
}