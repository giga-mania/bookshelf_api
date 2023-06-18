const express = require('express')
const userRouter = require("./routes/user")

const app = express()
const PORT = 8080


app.use('/api/user', userRouter)


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
