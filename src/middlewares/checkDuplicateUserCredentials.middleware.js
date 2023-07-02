import {PrismaClient} from "@prisma/client"
import Api400Error from "../errors/api400.error.js";


const prisma = new PrismaClient()

const checkByEmail = async (email) => {
    const emailUser = await prisma.user.findUnique({where: {email: email}})
    if (emailUser) throw new Api400Error('User with this email already exists!')
}

const checkByUsername = async (username) => {
    const usernameUser = await prisma.user.findUnique({where: {username: username}})
    if (usernameUser) throw new Api400Error('User with this username already exists!')
}

const checkDuplicateUserCredentialsMiddleware = async (req, res, next) => {
    const {username, email} = req.body

    try {
        await checkByEmail(email)
        await checkByUsername(username)

        next()
    } catch (err) {
        next(err)
    }
}


export default checkDuplicateUserCredentialsMiddleware