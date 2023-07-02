import BaseError from "./baseError.js";
import httpStatusCodes from "./httpStatusCodes.js";


class Api404Error extends BaseError {
    constructor (
        message = 'Not found!',
        statusCode = httpStatusCodes.NOT_FOUND,
    ) {
        super(message, statusCode)
    }
}


export default Api404Error