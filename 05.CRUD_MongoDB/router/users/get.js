

const getUser = (req, res) => {
    console.log("Get Users Request=>", req.body);
    res.status(200).send({ status: 200, message: 'user fetch successfully' })
}

export default getUser;