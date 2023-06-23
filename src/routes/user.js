import {Router} from "express";
import {loginUser, refreshToken, registerUser} from "../controllers/user.js"


const router = Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/token-refresh', refreshToken)


export default router