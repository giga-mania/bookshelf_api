import express from "express"
import userRouter from "./routes/user.js"
import cookieParser from "cookie-parser"


const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


app.use('/api/user', userRouter)


export default app
