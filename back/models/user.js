import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    creditBalence: { type: Number, default: 5 },
}, { timestamps: true });

const User = mongoose.model.user || mongoose.model("User", userSchema);
export default User;
