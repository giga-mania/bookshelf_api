import {PrismaClient} from "@prisma/client";
import Api400Error from "../errors/api400.error.js";
import Api404Error from "../errors/api404.error.js";


const prisma = new PrismaClient()

const createNote = async ({bookId, text, userId}) => {
    const book = await prisma.book.findUnique({
        where: {
            id: bookId
        }
    })

    if (!book) {
        throw new Api404Error('Instance of a book with given id does not exist!')
    }

    const existingNote = await prisma.note.findMany({
        where: {
            bookId,
            userId
        }
    })

    if (existingNote.length) {
        throw new Api400Error('Note for this book already exists!')
    }

    return prisma.note.create({
        data: {
            bookId,
            userId,
            text
        },
    })
}


const updateNote = async ({noteId, text}) => {
    const noteToUpdate = await prisma.note.findUnique({
        where: {
            id: noteId
        }
    })

    if (!noteToUpdate) {
        throw new Api404Error('Note with given id does not exist!')
    }

    return prisma.note.update({
        where: {
            id: noteId
        },
        data: {
            text
        }
    })
}


const deleteNote = async (noteId) => {
    const noteToDelete = await prisma.note.findUnique({
        where: {
            id: noteId
        }
    })

    if (!noteToDelete) {
        throw new Api404Error("Note with given id does not exist!")
    }

    await prisma.note.delete({
        where: {
            id: noteId
        }
    })
}


export default {
    createNote,
    updateNote,
    deleteNote
}