import {PrismaClient} from "@prisma/client";
import {getNextAndPrevPageRequestURLs, getPaginationOffset} from "../utils/utils.js";


const prisma = new PrismaClient()

const getBookList = async ({page, tags, protocol, host, baseUrl}) => {
    const paginationOffset = getPaginationOffset(page, 10)

    if (tags) {
        const filteredBooksCount = await prisma.book.count({
            where: {tag: {some: {id: {in: tags.split(',')}}}}
        })
        const filteredBooks = await prisma.book.findMany({
            skip: paginationOffset,
            take: 10,
            where: {
                tag: {
                    some: {
                        id: {
                            in: tags.split(',')
                        }
                    }
                }
            }
        })

        const {nextPageURL, prevPageURL} = getNextAndPrevPageRequestURLs(page, filteredBooksCount, {
            protocol,
            host,
            baseUrl,
        })

        return {
            bookCount: filteredBooks.length,
            nextPageURL,
            prevPageURL,
            books: filteredBooks
        }
    }

    const bookCount = await prisma.book.count()
    const books = await prisma.book.findMany({
        skip: paginationOffset,
        take: 10
    })

    const {nextPageURL, prevPageURL} = getNextAndPrevPageRequestURLs(page, bookCount, {
        protocol,
        host,
        baseUrl,
    })


    return {
        bookCount,
        nextPageURL,
        prevPageURL,
        books
    }
}


const getSingleBook = async (bookId) => {
    const book = await prisma.book.findUnique({
        where: {
            id: bookId
        }
    })

    if (!book) {
        throw {
            status: 404,
            message: "Book with provided id not found!"
        }
    }

    return book
}

const getBookTags = async () => {
    return prisma.tag.findMany()
}


const bookService = {
    getBookList,
    getSingleBook,
    getBookTags
}

export default bookService