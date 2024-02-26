import pool from "../database/dbConfig";
import DB_functions  from "../database/simpleFunction";
import { Request,Response } from "express";
import { hashPassword } from "./passwordHash";
const User = new DB_functions();

export const signUp = async (req: Request, res: Response) => {
    try {
        const { name, id, password } = req.body;

        const hashedPassword = await hashPassword(password);
        const userExists = await User.exists(undefined, id, undefined);
                        
        if (!userExists) {
            const newUser = {
                userName: name,
                userId: id,
                userPassword: hashedPassword
            };

            const createUserMessage = await User.create(newUser);
            
            if (createUserMessage === 'User successfully created') {
                res.status(200).json("success");
            } else {
                throw new Error('Failed to create user.');
            }
        } else {
            res.status(400).json("User already exists.");
        }
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json("Internal Server Error");
    }
};