import * as http from "node:http";
import {config} from "dotenv";
import app from "./app.js"

config()
const PORT = 8080

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
