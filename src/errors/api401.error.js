import BaseError from "./baseError.js";
import httpStatusCodes from "./httpStatusCodes.js";


class Api401Error extends BaseError {
    constructor (
        message = 'Unauthorized!',
        statusCode = httpStatusCodes.UNAUTHORIZED,
    ) {
        super(message, statusCode)
    }
}


export default Api401Error