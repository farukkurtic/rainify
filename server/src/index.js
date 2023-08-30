import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser"

import { Sound } from "./models/Sounds.js";

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get("/sounds", async function(req, res) {
    try {
        const sounds = await Sound.find();
        res.status(200).json(sounds);
    } catch(error) {
        return("error occured while fetching data: ", error);
    }
});

app.listen(3001, function(req, res) {
    console.log("server listening on port 3001");
});