import {Router} from "express";
import {loginUser, refreshToken, registerUser} from "../controllers/user.js"
import checkDuplicateUserCredentials from "../middleware/checkDuplicateUserCredentials.js";


const router = Router()

router.post('/register', checkDuplicateUserCredentials, registerUser)
router.post('/login', loginUser)
router.post('/token-refresh', refreshToken)


export default router