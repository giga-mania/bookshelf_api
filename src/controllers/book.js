import {PrismaClient} from "@prisma/client";


const prisma = new PrismaClient()


const getBookList = async (req, res) => {
    const {page} = req.query
    const recordsToSkip = page && page !== "1" ? (Number(page) - 1) * 10 : 0

    try {
        const bookCount = await prisma.book.count()
        const books = await prisma.book.findMany({
            skip: recordsToSkip,
            take: 10
        })


        const nextPageNum = page && bookCount > page * 10 ? Number(page) + 1 : null
        const prevPageNum = page && page !== "1" && page !== "0" ? Number(page) - 1 : null

        const nextPageURL = nextPageNum ? `${req.protocol}://${req.get('host')}${req.baseUrl}/?page=${nextPageNum}` : null
        const prevPageURL = prevPageNum ? `${req.protocol}://${req.get('host')}${req.baseUrl}/?page=${prevPageNum}` : null

        res.status(200).json({
            status: "OK",
            data: {
                count: bookCount,
                next: nextPageURL,
                prev: prevPageURL,
                results: books
            }
        })
    } catch (err) {
        res
            .status(err?.status || 500)
            .send({status: "FAILED", data: {error: err?.message || err}})
    }
}

const getSingeBook = async (req, res) => {
    const {bookId} = req.params

    try {
        const book = await prisma.book.findUnique({
            where: {
                id: bookId
            }
        })

        if (!book) {
            return res.status(404).json({
                status: "FAILED",
                data: {
                    error: "Book with provided id not found!"
                }
            })
        }


        res.status(200).json({
            status: "OK",
            data: book
        })
    } catch (err) {
        res
            .status(err?.status || 500)
            .send({status: "FAILED", data: {error: err?.message || err}})
    }
}


export {
    getBookList,
    getSingeBook,
}