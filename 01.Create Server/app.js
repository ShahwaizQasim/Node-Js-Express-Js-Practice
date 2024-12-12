import express from "express"

console.log("hello");


const app = express();

app.get(('/'), (req, res) => {
    res.send("Hello World")  // bowser hamy sirf get ki request ko handle krke deta hai 
})
app.get(('/users'), (req, res) => {
    res.send([{ name: "Syed Shahwaiz Qasim", age: '22', institute: 'SMIT' }])
})

app.post("/posts", (req, res) => {
    res.send({ type: "hello" }) // browser post ki request handle nahi krta  
})

app.listen(3000, () => {
    console.log("Server code running");
})
