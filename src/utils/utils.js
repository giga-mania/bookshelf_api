import bcrypt from "bcrypt"

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(12)
    return await bcrypt.hash(password, salt)
}

const verifyPassword = async (password, hash) => {
    return await bcrypt.compare(password, hash)
}

export {
    hashPassword,
    verifyPassword
}