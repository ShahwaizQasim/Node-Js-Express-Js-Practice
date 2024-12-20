import express from 'express'
import router from './routes/index.js' 

const app = express();

app.use(express.json()) // hamari app par jo bi request ayegi uss request me jo bi data ayega wo json format me hoga

app.get(('/'), (req, res) => {
    res.send("Hello World")
})

app.use('/api', router)

app.listen(3000, () => {
    console.log('server running');
})