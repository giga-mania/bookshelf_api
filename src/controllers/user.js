import {PrismaClient} from "@prisma/client";
import {hashPassword} from "../utils/utils.js";

const prisma = new PrismaClient()

const registerUser = async (req, res) => {
    const {firstName, lastName, username, email, password, passwordRepeat} = req.body

    try {
        if (password !== passwordRepeat) {
            return res.status(400).json({
                status: "FAILED",
                data: {
                    error: "Provided password don't match"
                }
            })
        }

        const emailUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (emailUser){
            return res.status(400).json({
                status: 'FAILED',
                data: {
                    error: 'User with this email already exists!'
                }
            })
        }

        const usernameUser = await prisma.user.findUnique({
            where: {
                username: username
            }
        })
        if (usernameUser) {
            return res.status(400).json({
                status: 'FAILED',
                data: {
                    error: 'User with this username already exists!'
                }
            })
        }

        const hashedPassword = await hashPassword(password)

        const newUser = await prisma.user.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                password: hashedPassword
            }
        })

        res.status(201).json({
            status: 'OK',
            data: newUser
        })
    } catch (err) {
        res
            .status(err?.status || 500)
            .send({status: "FAILED", data: {error: err.message || err}})
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