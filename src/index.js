import express from "express"
import {config} from "dotenv";
import userRouter from "./routes/user.js"
import cookieParser from "cookie-parser"
import {PrismaClient}  from "@prisma/client";

config()
const prisma = new PrismaClient()

// async function main() {
//     const allBooks = await prisma.book.findMany()
//     console.log(allBooks)
// }
//
// main()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })


const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/api/user', userRouter)


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
