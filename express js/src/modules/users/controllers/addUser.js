const AddUser = (req, res) => {
  try {
    console.log("User Request", req.body);
    res.status(200).send({
      status: 200,
      msg: "user added successfully",
    });
  } catch (error) {
    res.status(500).send({ status: 500, msg: error.message });
  }
};

export { AddUser };
