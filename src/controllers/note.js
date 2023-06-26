import {PrismaClient} from "@prisma/client";
import jwt from "jsonwebtoken";


const prisma = new PrismaClient()

const createNote = async (req, res) => {
    const {text} = req.body
    const {bookId} = req.params
    const {id: userId} = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET_KEY)

    try {
        const book = await prisma.book.findUnique({
            where: {
                id: bookId
            }
        })

        if (!book) {
            return res.status(400).json({
                status: 'FAILED',
                data: {
                    error: 'Instance of a book with given id does not exist!'
                }
            })
        }


        const existingNote = await prisma.note.findMany({
            where: {
                bookId,
                userId
            }
        })

        if (existingNote.length) {
            return res.status(400).json({
                status: 'FAILED',
                data: {
                    error: 'Note for this book already exists!'
                }
            })
        }


        const note = await prisma.note.create({
            data: {
                bookId,
                userId,
                text
            },
        })

        res.status(200).json({
            status: 'OK',
            data: {
                id: note.id,
                text: note.text
            }
        })
    } catch (err) {
        res
            .status(err?.status || 500)
            .send({status: "FAILED", data: {error: err?.message || err}})
    }
}

const updateNote = async (req, res) => {
    const {noteId} = req.params
    const {text} = req.body

    try {
        const noteToUpdate = await prisma.note.findUnique({
            where: {
                id: noteId
            }
        })

        if (!noteToUpdate) {
            return res.status(400).json({
                status: 'FAIlED',
                data: {
                    error: 'Note with given id does not exist!'
                }
            })
        }

        const updatedNotes = await prisma.note.update({
            where: {
                id: noteId
            },
            data: {
                text
            }
        })


        res.status(200).json({
            status: "OK",
            data: {
                id: updatedNotes.id,
                text: updatedNotes.text
            }
        })
    } catch (err) {
        res
            .status(err?.status || 500)
            .send({status: "FAILED", data: {error: err?.message || err}})
    }
}

const deleteNote = async (req, res) => {
    const {noteId} = req.params


    try {

    } catch (err) {

    }
}


export {
    createNote,
    updateNote,
    deleteNote
}