import {PrismaClient} from "@prisma/client";
import {getNextAndPrevPageRequestURLs, getPaginationOffset} from "../utils/utils.js";


const prisma = new PrismaClient()


const getBookList = async (req, res) => {
    const {page} = req.query
    const paginationOffset = getPaginationOffset(page, 10)

    try {
        const bookCount = await prisma.book.count()
        const books = await prisma.book.findMany({
            skip: paginationOffset,
            take: 10
        })

        const {nextPageURL, prevPageURL} = getNextAndPrevPageRequestURLs(page, bookCount, {
            protocol: req.protocol,
            host: req.get("host"),
            baseUrl: req.baseUrl
        })


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