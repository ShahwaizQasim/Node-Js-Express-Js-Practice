import express from "express";
import { mongoose } from "./db/dbConnect.js";

const app = express();

mongoose.connection.on("open", ()=> {
    console.log("Database Connected");
})
mongoose.connection.on("error", (err)=> {
    console.log("Database Not Connected", err);
})

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(3000, () => {
    console.log("server running");
})