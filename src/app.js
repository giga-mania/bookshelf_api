import express from "express"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.js"
import bookRouter from "./routes/book.js"
import authorRouter from "./routes/author.js"
import noteRouter from "./routes/note.js"
import eventRouter from "./routes/event.js"
import authenticateToken from "./middleware/authenticateToken.js";

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


app.use('/api/user', userRouter)
app.use(authenticateToken)
app.use('/api/book', bookRouter)
app.use('/api/author', authorRouter)
app.use('/api/note', noteRouter)
app.use('/api/event', eventRouter)


export default app
