import express from "express"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.js"
import bookRouter from  "./routes/book.js"


const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


app.use('/api/user', userRouter)
app.use('/api/book', bookRouter)


export default app
