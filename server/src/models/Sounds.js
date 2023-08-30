import {mongoose, Schema } from "mongoose";

const soundSchema = new Schema ({
    name: String,
    audioLink: String,
    description: String,
});

export const Sound = mongoose.model("Sound", soundSchema);

