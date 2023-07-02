import userService from "../services/user.service.js"


const registerUser = async (req, res, next) => {
    try {
        const newUser = await userService.registerUser(req.body)

        res.status(201).json({
            status: 'OK',
            data: newUser
        })
    } catch (err) {
        next(err)
    }
}


const loginUser = async (req, res, next) => {
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
        next(err)
    }
}


const refreshToken = (req, res, next) => {
    const refreshToken = req.cookies?.jwt

    try {
        const accessToken = userService.refreshToken(refreshToken)

        res.status(200).json({
            status: "OK",
            data: {
                accessToken
            }
        })
    } catch (err) {
        next(err)
    }
}


export {
    registerUser,
    loginUser,
    refreshToken
}