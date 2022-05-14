import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    fname: {
      type: String,
      required: true,
    },
    mname: {
      type: String,
    },
    lname: {
      type: String,
      required: true,
    },
    addressline1: {
      type: String,
      required: true,
    },
    addressline2: {
      type: String,
    },
    landmark: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
