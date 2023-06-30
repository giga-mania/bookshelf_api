import jwt from "jsonwebtoken";
import eventService from "../services/event.service.js"



const getEvent = async (req, res) => {
    const {eventId} = req.params

    try {
        const event = await eventService.getEvent(eventId)


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
        const newEvent = await eventService.createEvent({
            bookId,
            userId,
            title,
            city,
            eventDate,
            byInvitation,
            ageRegulation
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
    const {eventId} = req.params

    try {
        const updatedEvent = await eventService.updateEvent({eventId, eventBody: req.body})

        res.status(200).json({
            status: 'OK',
            data: updatedEvent
        })
    } catch (err) {
        res
            .status(err?.status || 500)
            .send({status: 'FAILED', data: {error: err?.message || err}})
    }
}

const deleteEvent = async (req, res) => {
    const {eventId} = req.params

    try {
        await eventService.deleteEvent(eventId)

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