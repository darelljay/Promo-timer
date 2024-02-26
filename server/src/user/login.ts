import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import DB_functions from "../database/simpleFunction";
import { comparePassword } from "./comparePassword";

const User = new DB_functions();

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const session = req.session as { userId?: string; userName?: string; isLogined?: boolean; uuId?: string;};

        const { id, password } = req.body;

        const user = await User.findByUserId(id);

        if (!Array.isArray(user) || user.length === 0) {
            res.status(400).json("User does not exist.");
            return;
        }

        const userData = user[0] as RowDataPacket;

        const isPasswordCorrect = await comparePassword(password, userData.userPassword);
        if (isPasswordCorrect) {
            session.userId = userData.userId;
            session.userName = userData.userName;
            session.uuId = userData.uuidINT;
            session.isLogined = true;
            res.status(200).json("Successfully logged in");
        } else {
            res.status(400).json("Wrong password");
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json("Internal Server Error");
    }
};
