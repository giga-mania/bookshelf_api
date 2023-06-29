import {Router} from "express";
import {createNote, updateNote, deleteNote} from "../controllers/note.controller.js"


const router = Router()

router.post('/book/:bookId', createNote)
router.put('/:noteId', updateNote)
router.delete('/:noteId', deleteNote)


export default router