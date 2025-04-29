import express from "express";
import router from "./routes/routes.js";
import 'dotenv/config'
import ConnectDB from "./config/connectDB.js";

const app = express();

app.use(express.json());

ConnectDB();

app.get("/", (req, res) => {
  res.send(`Hello World ${Date.now().toString(22)}`);
});

app.use("/api", router)

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Run at 3000");
});
