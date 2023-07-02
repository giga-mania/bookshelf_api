import BaseError from "./baseError.js";
import httpStatusCodes from "./httpStatusCodes.js";


class Api400Error extends BaseError {
    constructor (
        message = 'Bad Request!',
        statusCode = httpStatusCodes.BAD_REQUEST,
    ) {
        super(message, statusCode)
    }
}


export default Api400Error