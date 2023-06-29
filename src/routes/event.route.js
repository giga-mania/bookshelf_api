import {Router} from "express";
import {getEvent, createEvent, updateEvent, deleteEvent} from "../controllers/event.controller.js"


const router = Router()

router.get('/:eventId', getEvent)
router.post('/book/:bookId', createEvent)
router.patch('/:eventId', updateEvent)
router.delete('/:eventId', deleteEvent)


export default router