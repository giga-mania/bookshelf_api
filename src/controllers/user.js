import {PrismaClient} from "@prisma/client";
import jwt from "jsonwebtoken"
import {createToken, hashPassword, verifyPassword} from "../utils/utils.js";

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
            .send({status: "FAILED", data: {error: err?.message || err}})
    }
}


const loginUser = async (req, res) => {
    const {username, password} = req.body

    if (!username || !password) {
        return res.status(400).json({
            status: 'FAILED',
            data: {
                error: 'Credentials were not provided!'
            }
        })
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                username: username
            }
        })

        if (!user) {
            return res.status(401).json({
                status: 'FAILED',
                data: {
                    error: "User with these credential doesn't exist!"
                }
            })
        }

        const isPasswordValid = await verifyPassword(password, user.password)

        if (!isPasswordValid) {
            return res.status(401).json({
                status: 'FAILED',
                data: {
                    error: "User with these credential doesn't exist!"
                }
            })
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

        res.cookie('jwt', refreshToken, {
            httpOnly: true,
            sameSite: 'None',
            // secure: true,
            maxAge: 24 * 60 * 60 * 1000
        })

        res.status(200).json({
            status: "OK",
            data: {
                accessToken,
                refreshToken
            }
        })
    } catch (err) {
        res
            .status(err?.status || 500)
            .send({status: "FAILED", data: {error: err?.message || err}})
    }
}


const refreshToken = (req, res) => {
    const refreshToken = req.cookies?.jwt

    if (!refreshToken) {
        return res.status(401).json({
            status: 'FAILED',
            data: {
                error: "Refresh token weren't provided!"
            }
        })
    }

    try {
        const decoded = jwt.decode(refreshToken)
        const userInfo = {
            id: decoded.id,
            firstName: decoded.firstName,
            lastName: decoded.lastName,
            email: decoded.email,
            username: decoded.username,
            isSuperUser: decoded.isSuperUser,
        }
        const accessToken = createToken(userInfo, '15m')

        res.status(200).json({
            status: "OK",
            data: {
                accessToken
            }
        })
    } catch (err) {
        res
            .status(err?.status || 500)
            .send({status: 'FAILED', data: {error: err?.message || err}})
    }
}


export {
    registerUser,
    loginUser,
    refreshToken
}