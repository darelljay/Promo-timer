import express, { Request, Response, NextFunction } from "express";

// Define additional properties for the session object
declare module "express-session" {
    interface SessionData {
        isLoggedIn?: boolean;
    }
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
    if (req.session && req.session.isLoggedIn) {
        next();
    } else {
        res.status(401).json("User not authorized");
    }
};
