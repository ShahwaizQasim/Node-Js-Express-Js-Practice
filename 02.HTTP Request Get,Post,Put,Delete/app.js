import express from "express"

const app = express();

app.use(express.json());

let users = [];

app.get(('/'), (req, res) => {
    res.send(`Hello World ${Date.now().toString(22)}`)  // bowser hamy sirf get ki request ko handle krke deta hai 
})

app.get(('/users'), (req, res) => {
    try {
        res.status(200).send([{ status: 200, user: users, message: 'user fetch successfully' }])
    } catch (error) {
        res.status(400).send({ status: 400, message: 'something went wrong' })
    }
})

app.post("/users", (req, res) => {
    try {
        // console.log("POST Request===>", req.body);
        users.push({ id: Date.now().toString(22), ...req.body })
        // console.log("Request===>", users)
        res.status(201).send({ status: 201, message: "user added successfully" }) // browser post ki request handle nahi krta  
    } catch (error) {
        res.status(400).send({ status: 400, message: 'something went wrong' })
    }
})

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    //  const userDelete = users.findIndex((user) => user.id === Number(id)) // first method
    //  users.splice(userDelete, 1)
    users = users.filter((obj) => obj.id !== id) // second method
    res.send({ id: id, message: 'user deleted successfully' })
})

app.put(('/users/:id'), (req, res) => {
    const { id } = req.params;
    const userUpdate = users.findIndex((user) => user.id === id);
    // console.log("userUpdate", userUpdate);/
    users.splice(userUpdate, 1, { id: id, ...req.body })
    res.send({ id: id, message: "user updated successfully" })
})

app.listen(3000, () => {
    console.log("Server code running");
})
