import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: { type: mongoose.Schema.Types.String },
    email: { type: mongoose.Schema.Types.String },
    password: { type: mongoose.Schema.Types.String }
})

const UserModal = mongoose.model('user', userSchema);

export default UserModal;