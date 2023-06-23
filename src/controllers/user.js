const registerUser = (req, res) => {
    const {firstName, lastName, userName, email, password, passwordRepeat} = req.body

    console.log(req.body)
    res.json(req.body)
    try {

    } catch (e) {

    }
}


const loginUser = (req, res) => {

}


const refreshToken = (req, res) => {

}


export {
    registerUser,
    loginUser,
    refreshToken
}