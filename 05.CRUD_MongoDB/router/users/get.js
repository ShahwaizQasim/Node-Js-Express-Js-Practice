import UserModal from "../../model/index.js";


const getUser = async (req, res) => {
    try {
        // let user = await UserModal.find({  // find, findOne, findById, ka all method mongoose ky documentation me likhen hai
        //     userName: "Zehra"   // is tariqa se hum query bi laga sakhte hain database se apni marzi ka data bi find kr sakte hain
        // });

        let user = await UserModal.find() //Database se all users ko find kiya hai 
        res.status(200).send({ status: 200, user: user, message: 'user fetch successfully' })

    } catch (error) {
        res.status(500).send({ status: 500, message: error.message });
    }
}

export default getUser;