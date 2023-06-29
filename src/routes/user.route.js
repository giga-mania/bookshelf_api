import {Router} from "express";
import {loginUser, refreshToken, registerUser} from "../controllers/user.controller.js"
import checkDuplicateUserCredentialsMiddleware from "../middleware/checkDuplicateUserCredentials.middleware.js";


const router = Router()

router.post('/register', checkDuplicateUserCredentialsMiddleware, registerUser)
router.post('/login', loginUser)
router.post('/token-refresh', refreshToken)


export default router