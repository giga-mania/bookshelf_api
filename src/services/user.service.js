import {PrismaClient} from "@prisma/client"
import {createToken, hashPassword, verifyPassword} from "../utils/utils.js";
import jwt from "jsonwebtoken";
import Api400Error from "../errors/api400.error.js";
import Api404Error from "../errors/api404.error.js";
import Api401Error from "../errors/api401.error.js";


const prisma = new PrismaClient()

const registerUser = async ({firstName, lastName, username, email, password, passwordRepeat}) => {
    if (password !== passwordRepeat) {
        throw new Api400Error("Provided password don't match")
    }

    const hashedPassword = await hashPassword(password)
    return prisma.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: hashedPassword
        }
    })
}


const loginUser = async ({username, password}) => {
    if (!username || !password) {
        throw new Api400Error("Credentials were not provided!")
    }

    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    })


    if (!user) {
        throw new Api404Error("User with these credentials doesn't exist!")
    }

    const isPasswordValid = await verifyPassword(password, user.password)

    if (!isPasswordValid) {
        throw {
            status: 404,
            message: "User with these credentials doesn't exist!"
        }
    }

    const userInfo = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        isSuperUser: user.isSuperUser
    }
    const accessToken = createToken(userInfo, '15m')
    const refreshToken = createToken(userInfo, '1d')

    return {
        accessToken,
        refreshToken
    }
}


const refreshToken = (token) => {
    if (!token) {
        throw new Api401Error("Refresh token weren't provided!")
    }

    const decoded = jwt.decode(token)
    const userInfo = {
        id: decoded.id,
        firstName: decoded.firstName,
        lastName: decoded.lastName,
        email: decoded.email,
        username: decoded.username,
        isSuperUser: decoded.isSuperUser,
    }

    return createToken(userInfo, '15m')
}


export default {
    registerUser,
    loginUser,
    refreshToken
}