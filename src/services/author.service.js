import {PrismaClient} from "@prisma/client";
import Api404Error from "../errors/api404.error.js";
import {getNextAndPrevPageRequestURLs, getPaginationOffset} from "../utils/utils.js";


const prisma = new PrismaClient()


const getAuthorList = async ({page, protocol, host, baseUrl}) => {
    const paginationOffset = getPaginationOffset(page, 10)

    const authorCount = await prisma.author.count()
    const authors = await prisma.author.findMany({
        skip: paginationOffset,
        take: 10
    })

    const {nextPageURL, prevPageURL} = getNextAndPrevPageRequestURLs(page, authorCount, {
        protocol,
        host,
        baseUrl
    })

    return {
        authorCount,
        nextPageURL,
        prevPageURL,
        authors
    }
}


const getSingleAuthor = async (authorId) => {
    const author = await prisma.author.findUnique({
        where: {
            id: authorId
        }
    })

    if (!author) {
        throw new Api404Error("Author with provided id weren't found!")
    }

    return author
}


const getAuthorBooks = async ({page, authorId, protocol, host, baseUrl}) => {
    const paginationOffset = getPaginationOffset(page, 10)

    const authorBookCount = await prisma.book.count({
        where: {
            authorId: authorId
        }
    })

    const authorBooks = await prisma.book.findMany({
        skip: paginationOffset,
        take: 10,
        where: {
            authorId: authorId
        }
    })

    const {nextPageURL, prevPageURL} = getNextAndPrevPageRequestURLs(page, authorBookCount, {
        protocol,
        host,
        baseUrl
    })

    return {
        authorBookCount,
        authorBooks,
        nextPageURL,
        prevPageURL
    }
}


export default {
    getAuthorList,
    getSingleAuthor,
    getAuthorBooks
}