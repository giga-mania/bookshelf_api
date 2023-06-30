import userService from "../services/user.service.js"


const registerUser = async (req, res) => {
    try {
        const newUser = await userService.registerUser(req.body)

        res.status(201).json({
            status: 'OK',
            data: newUser
        })
    } catch (err) {
        res
            .status(err?.status || 500)
            .send({status: "FAILED", data: {error: err.message}})
    }
}


const loginUser = async (req, res) => {
    try {
        const {accessToken, refreshToken} = await userService.loginUser(req.body)

        res.cookie('jwt', refreshToken, {
            httpOnly: true,
            sameSite: 'None',
            // secure: true,
            maxAge: 24 * 60 * 60 * 1000
        })

        res.status(200).json({
            status: "OK",
            data: {
                accessToken,
                refreshToken
            }
        })
    } catch (err) {
        res
            .status(err?.status || 500)
            .send({status: "FAILED", data: {error: err?.message || err}})
    }
}


const refreshToken = (req, res) => {
    const refreshToken = req.cookies?.jwt

    if (!refreshToken) {
        return res.status(401).json({
            status: 'FAILED',
            data: {
                error: "Refresh token weren't provided!"
            }
        })
    }

    try {
        const accessToken = userService.refreshToken(refreshToken)

        res.status(200).json({
            status: "OK",
            data: {
                accessToken
            }
        })
    } catch (err) {
        res
            .status(err?.status || 500)
            .send({status: 'FAILED', data: {error: err?.message || err}})
    }
}


export {
    registerUser,
    loginUser,
    refreshToken
}