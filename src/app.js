import express from "express"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.route.js"
import bookRouter from "./routes/book.route.js"
import authorRouter from "./routes/author.route.js"
import noteRouter from "./routes/note.route.js"
import eventRouter from "./routes/event.route.js"
import errorHandler from "./middlewares/errorHandler.middleware.js";
import authenticateTokenMiddleware from "./middlewares/authenticateToken.middleware.js";
import httpLogger from "./middlewares/httpLogger.middleware.js";


const app = express()

app.use(httpLogger)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/api/user', userRouter)
app.use(authenticateTokenMiddleware)
app.use('/api/book', bookRouter)
app.use('/api/author', authorRouter)
app.use('/api/note', noteRouter)
app.use('/api/event', eventRouter)
app.use(errorHandler)


export default app
