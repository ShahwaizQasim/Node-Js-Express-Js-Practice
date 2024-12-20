import express from "express";
import { mongoose } from "./db/dbConnect.js";
import router from "./router/index.js";

const app = express();

app.use(express.json());

mongoose.connection.on("open", ()=> {
    console.log("Database Connected");
})
mongoose.connection.on("error", (err)=> {
    console.log("Database Not Connected", err);
})

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/api', router)

app.listen(3000, () => {
    console.log("server running");
})