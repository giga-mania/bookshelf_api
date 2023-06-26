import {PrismaClient} from "@prisma/client";
import jwt from "jsonwebtoken";


const prisma = new PrismaClient()

const getEvent = async (req, res) => {
    const {eventId} = req.params

    try {
        const event = await prisma.event.findUnique({
            where: {
                id: eventId
            }
        })

        if (!event) {
            return res.status(400).json({
                status: 'FAILED',
                data: {
                    error: 'Event with given id does not exist!'
                }
            })
        }


        res.status(200).json({
            status: 'OK',
            data: event
        })
    } catch (err) {
        res
            .status(err?.status || 500)
            .send({status: 'FAILED', data: {error: err?.message || err}})
    }
}

const createEvent = async (req, res) => {
    const {bookId} = req.params
    const {id: userId} = jwt.decode(req.cookies.jwt)
    const {eventDate, title, city, byInvitation, ageRegulation} = req.body


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


        const existingEvent = await prisma.event.findMany({
            where: {
                bookId,
                userId
            }
        })

        if (existingEvent.length > 0) {
            return res.status(400).json({
                status: 'FAILED',
                data: {
                    error: 'Event for this book already exists!'
                }
            })
        }

        const newEvent = await prisma.event.create({
            data: {
                title,
                city,
                eventDate: new Date(eventDate),
                byInvitation,
                ageRegulation,
                bookId,
                userId
            }
        })


        res.status(200).json({
            status: 'OK',
            data: newEvent
        })
    } catch (err) {
        res
            .status(err?.status || 500)
            .send({status: 'FAILED', data: {error: err?.message || err}})
    }
}

const updateEvent = async (req, res) => {

}

const deleteEvent = async (req, res) => {
    const {eventId} = req.params

    try {
        const eventToDelete = await prisma.event.findUnique({
            where: {
                id: eventId
            }
        })

        if(!eventToDelete) {
            return res.status(400).json({
                status: 'FAILED',
                data: {
                    error: 'Event with given id does not exist!'
                }
            })
        }


        await prisma.event.delete({
            where: {
                id: eventId
            }
        })

        res.status(200).json({
            status: 'OK',
            data: `Event ${eventId} got deleted!`
        })
    } catch (err) {
        res
            .status(err?.status || 500)
            .send({status: 'FAILED', data: {error: err?.message || err}})
    }
}


export {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
}