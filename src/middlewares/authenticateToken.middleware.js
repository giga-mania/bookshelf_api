import jwt from "jsonwebtoken"
import Api401Error from "../errors/api401.error.js";


const catchError = (err) => {
    const {TokenExpiredError} = jwt
    if(err instanceof TokenExpiredError) {
        throw new Api401Error('Unauthorized! Access token is expired!')
    }

    throw new Api401Error(`Unauthorized: ${err?.message}`)
}

const authenticateTokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.slice(7);

    if(!token) {
        throw new Api401Error('Unauthorized! Token were not provided!')
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if(err) {
            return catchError(err)
        }

        req.userId = decoded.id
        next()
    })
}


export default authenticateTokenMiddleware
