import express,{Request,Response,NextFunction} from "express";
import { signUp } from "../../user/signUp";
import { login } from "../../user/login";

export const userRoute = express.Router();


userRoute.route("/signUp").post(signUp);
userRoute.route("/login").post(login);
