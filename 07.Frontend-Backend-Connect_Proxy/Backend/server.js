import express from "express"
import 'dotenv/config'

const app = express();

app.get('/api/fruits', (req, res) => {
    const Fruits = [
        {
            id: 1,
            name: "Apple",
        },
        {
            id: 2,
            name: "Banana",
        },
        {
            id: 3,
            name: "Pomegranate",
        },
        {
            id: 4,
            name: "PineApple",
        },
    ]
    res.send(Fruits)
})

app.listen(process.env.PORT, () => {
    console.log('Server Running');
})