import cors from "cors";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

import { Application } from "express";
import express from 'express';
import { executeQuery } from "../database/db";
import { userRoute } from "../routes/users/userRoute";
import session from "express-session";
import cookieParser from "cookie-parser";
import { authRoute } from "../routes/auth/authRoute";

export const initAppExpress = async (app: Application): Promise<void> => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser()); // Add cookie-parser middleware
    app.use(
        session({
            secret: process.env.SESSION_SECRET || '@darelljay',
            resave: false,
            saveUninitialized: true,
            cookie: {
                secure: false, // Set to true if using HTTPS
                maxAge: 1000 * 60 * 60 * 24, // 1 day in milliseconds
            },
        })
    );

    app.use("/", userRoute);
    app.use('/auth',authRoute);
    
    // Assuming executeQuery returns a Promise
    const rows = await executeQuery("SELECT * FROM USER");
    console.log(rows);
};
