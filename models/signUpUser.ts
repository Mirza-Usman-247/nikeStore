import mongoose, { models, Schema } from "mongoose";

const signUpUserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const signUpUser = models["signUpUser"] || mongoose.model("signUpUser", signUpUserSchema);

export default signUpUser;
