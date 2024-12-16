

const postUser = (req, res) => {
    console.log("Request=>", req.body);
    res.send({ status: 200, message: "user added successfully" })
}

export default postUser;