import jwt from "jsonwebtoken"


const catchError = (err, res) => {
    const {TokenExpiredError} = jwt
    if(err instanceof TokenExpiredError) {
        return res.status(401).json({
            status: 'FAILED',
            data: {
                error: 'Unauthorized! Access token is expired!'
            }
        })
    }

    return res.status(401).json({
        status: 'FAILED',
        data: {
            error: `Unauthorized: ${err?.message}`
        }
    })
}

const authenticateTokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization.slice(7);

    if(!token) {
        return res.status(400).json({
            status: 'FAILED',
            data: {
                error: 'Token were not provided!'
            }
        })
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if(err) {
            return catchError(err, res)
        }

        req.userId = decoded.id
        next()
    })
}


export default authenticateTokenMiddleware
