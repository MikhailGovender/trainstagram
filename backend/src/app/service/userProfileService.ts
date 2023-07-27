import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../../infrastructure/repositories/UserRepository";
import { ErrorHandler } from "../helpers/ErrorHandler";

export const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const repository = new UserRepository();
        console.log('req.body.id: ', req.body.id);
        const user = await repository.readByID(req.body.id);

        if(!user) {
            return next(new ErrorHandler('User Profile not found', 404));
        }

        user.profilePicture = (user.profilePicture != null)?user.profilePicture.toString('base64'):'N/A';

        res.status(200).send({
            success: true,
            user: user
        });
    } catch(error) {
        console.log('ERROR: ', error);
        return next(new ErrorHandler('Internal Server Error', 500));
    }
}
