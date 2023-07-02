import {PrismaClient} from "@prisma/client"
import Api400Error from "../errors/api400.error.js";


const prisma = new PrismaClient()

const checkDuplicateUserCredentialsMiddleware = async (req, res, next) => {
    const {username, email} = req.body

    try {
        const emailUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (emailUser) {
            throw new Api400Error('User with this email already exists!')
        }


        const usernameUser = await prisma.user.findUnique({
            where: {
                username: username
            }
        })
        if (usernameUser) {
            throw new Api400Error('User with this username already exists!')
        }

        next()
    } catch (err) {
        next(err)
    }
}


export default checkDuplicateUserCredentialsMiddleware