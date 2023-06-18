const router = require('express').Router()
const {registerUser, loginUser, refreshToken} = require("../controllers/user")


router.post('/register', registerUser)

router.post('/login', loginUser)

router.post('token-refresh', refreshToken)

module.exports = router