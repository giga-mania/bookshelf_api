import jwt from "jsonwebtoken";
import noteService from "../services/note.service.js";


const createNote = async (req, res, next) => {
    const {text} = req.body
    const {bookId} = req.params
    const {id: userId} = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET_KEY)

    try {
        const newNote = await noteService.createNote({userId, bookId, text})
        console.log(newNote)
        res.status(200).json({
            status: 'OK',
            data: {
                id: newNote.id,
                text: newNote.text
            }
        })
    } catch (err) {
        next(err)
    }
}

const updateNote = async (req, res, next) => {
    const {noteId} = req.params
    const {text} = req.body

    try {
        const updatedNote = await noteService.updateNote({noteId, text})

        res.status(200).json({
            status: "OK",
            data: {
                id: updatedNote.id,
                text: updatedNote.text
            }
        })
    } catch (err) {
       next(err)
    }
}

const deleteNote = async (req, res, next) => {
    const {noteId} = req.params

    try {
        await noteService.deleteNote(noteId)

        res.status(200).json({
            status: 'OK',
            data: `A note ${noteId} got deleted!`
        })
    } catch (err) {
        next(err)
    }
}


export {
    createNote,
    updateNote,
    deleteNote
}