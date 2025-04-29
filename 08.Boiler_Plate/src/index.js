import express from "express";
import 'dotenv/config'
import { ENV } from "./constant/index.js";
import router from "./routes/index.js";
import helmet from "helmet"
import ConnectDB from "./db/index.js";
import cors from 'cors' 

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello World")
})

ConnectDB();

app.use('/api', router);


app.listen(ENV.PORT, () => {
    console.log("Server Running");
})