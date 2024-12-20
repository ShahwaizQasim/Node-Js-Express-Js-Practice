import express from 'express'
import mongoose from './db/index.js';

const app = express();

mongoose.connection.on("open", () => {
    console.log("Database Connected");
})

mongoose.connection.on("error", (err) => {
    console.log("Database Not Connected", err);
})

app.get(('/'), (req, res) => {
    res.send(`Mongo DB Connected in Node JS`)
})

app.use('/api', )

app.listen(3000, () => {
    console.log('server running');
})