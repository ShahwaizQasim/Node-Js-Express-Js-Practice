import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hello World ${Date.now().toString(22)}`);
});

app.get("/users", (req, res) => {
  res.send({ name: "Syed Shahwaiz", trainer: "SMIT" });
});

let users = [];

app.get("/posts", (req, res) => {
  try {
    res.status(200).send([
      {
        status: 200,
        msg: "user fetch successfully",
        user: users,
      },
    ]);
  } catch (error) {
    res.status(500).send({
      status: 500,
      msg: error.message,
      data: users,
    });
  }
});

app.post("/posts", (req, res) => {
  try {
    const data = req.body;
    console.log("data", data);
    users.push(data);
    res.status(200).send({
      status: 200,
      msg: "user added successfully",
      recievedData: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 500, msg: error.message });
  }
});

app.delete("/posts/:id", (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    // const userDelete = users.findIndex((ind) => ind.id === id)  // first method
    // users.splice(userDelete, 1)
    users = users.filter((userId)=> userId !== id); // second mehtod
    res.status(200).send({
      status: 200,
      msg: "user deleted successfully",
    });
  } catch (error) {
    res.status(500).send({ status: 500, msg: error.message });
  }
});

app.put("/posts/:id", ()=>{
    const {id} = req.params;
    

})

console.log(users);

app.listen(3000, () => {
  console.log("Server Run at 3000");
});
