import {PrismaClient} from "@prisma/client";


const prisma = new PrismaClient()


const getAuthorList = async (req, res) => {
    const {page} = req.query
    const recordsToSkip = page && page !== "1" ? page * 10 : 0


    try {
        const authorCount = await prisma.author.count()
        const authors = await prisma.book.findMany({
            skip: recordsToSkip,
            take: 10
        })

        const nextPageNum = authors.length < 10 ? null : !page ? 1 : Number(page) + 1
        const prevPageNum = page && page !== "1" && page !== "0" ? Number(page) - 1 : null

        const nextPageURL = nextPageNum ? `${req.protocol}://${req.get('host')}${req.baseUrl}/?page=${nextPageNum}` : null
        const prevPageURL = prevPageNum ? `${req.protocol}://${req.get('host')}${req.baseUrl}/?page=${prevPageNum}` : null

        res.status(200).json({
            status: "OK",
            data: {
                count: authorCount,
                next: nextPageURL,
                prev: prevPageURL,
                results: authors
            }
        })
    } catch (err) {
        res
            .status(err?.status || 500)
            .send({status: "FAILED", data: {error: err?.message || err}})
    }
}

const getSingleAuthor = async (req, res) => {

}

const getAuthorBooks = async (req, res) => {

}


export {
    getAuthorBooks,
    getSingleAuthor,
    getAuthorList
}