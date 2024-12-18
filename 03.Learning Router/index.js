import express from 'express'
import router from './routes/index.js' 

const app = express();

app.use(express.json())

app.get(('/'), (req, res) => {
    res.send("Hello World")
})

app.use('/api', router)

app.listen(3000, () => {
    console.log('server running');
})