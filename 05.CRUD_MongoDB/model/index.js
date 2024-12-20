import mongoose from "mongoose";

// models database me kiya add krna hai hamy pehly se batana hoga
// create schema hum schema is liye banate hain because hamy pehly se btana hota hota hai ky hamy database me kiya add karna hai
const userSchema = new mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    email: {
        type: mongoose.Schema.Types.String,
        unique: true,
        required: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true
    }
},
    {
        timestamps: {  // rename krdia 
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    })

const UserModal = mongoose.model('user', userSchema);

export default UserModal;