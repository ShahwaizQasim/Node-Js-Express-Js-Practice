import express from "express"

const app = express();

app.use(express.json());

let users = [];

app.get(('/'), (req, res) => {
    res.send(`Hello World ${Date.now().toString(22)}`)  // bowser hamy sirf get ki request ko handle krke deta hai 
})

app.get(('/users'), (req, res) => {
    res.send([{ user: users, message: 'user fetch successfully' }])
})

app.post("/users", (req, res) => {
    // console.log("POST Request===>", req.body);
    users.push({ id: Date.now().toString(22), ...req.body })
    // console.log("Request===>", users)
    res.send({ message: "user added successfully" }) // browser post ki request handle nahi krta  
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
    console.log("userUpdate", userUpdate);
    users.splice(userUpdate, 1, { id: id, ...req.body })
    res.send({ id: id, message: "user updated successfully" })
})

app.listen(3000, () => {
    console.log("Server code running");
})
