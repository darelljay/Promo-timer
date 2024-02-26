import express from "express";
import { auth } from "../../middleware/auth";

export const authRoute = express.Router();

authRoute.route("/").get(auth);
