class BaseError extends Error {
    constructor (message, statusCode, ) {
        super(message)

        Object.setPrototypeOf(this, new.target.prototype)
        this.statusCode = statusCode
        Error.captureStackTrace(this)
    }
}

export default BaseError