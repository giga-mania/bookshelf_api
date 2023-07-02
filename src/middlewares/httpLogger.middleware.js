import morgan from "morgan";

const httpLogger = morgan("HTTP Access Log: :method :url :status :res[content-length] - :response-time ms")


export default httpLogger