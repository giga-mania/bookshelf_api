const express = require('express')
require('dotenv').config()
const userRouter = require("./routes/user")
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()



async function main() {
    const allUser = await prisma.user.findMany()

    console.log(allUser)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })


const app = express()
const PORT = 8080


app.use('/api/user', userRouter)


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
