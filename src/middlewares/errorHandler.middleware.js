const errorHandler = (err, req, res, _) => {
    console.error(err)
    res.status(err?.statusCode || 500).json({
        status: "FAILED",
        data: {
            error: err?.message || err
        }
    })
}


export default errorHandler