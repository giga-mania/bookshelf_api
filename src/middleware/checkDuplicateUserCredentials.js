import {PrismaClient} from "@prisma/client"


const prisma = new PrismaClient()

const checkDuplicateUserCredentials = async (req, res, next) => {
    const {username, email} = req.body

    try {
        const emailUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (emailUser) {
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

        next()
    } catch (err) {
        res
            .status(err?.status || 500)
            .send({status: "FAILED", data: {error: err?.message || err}})
    }
}


export default checkDuplicateUserCredentials