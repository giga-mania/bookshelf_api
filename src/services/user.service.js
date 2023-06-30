import {PrismaClient} from "@prisma/client"
import {createToken, hashPassword, verifyPassword} from "../utils/utils.js";
import jwt from "jsonwebtoken";


const prisma = new PrismaClient()

const registerUser = async ({firstName, lastName, username, email, password, passwordRepeat}) => {
    if (password !== passwordRepeat) {
        throw {
            status: 400,
            message: 'Provided password don\'t match'
        }
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


const loginsUser = async ({username, password}) => {
    if (!username || !password) {
        throw {
            status: 400,
            message: 'Credentials were not provided!'
        }
    }

    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    })


    if (!user) {
        throw {
            status: 404,
            message: "User with these credentials doesn't exist!"
        }
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
    loginsUser,
    refreshToken
}