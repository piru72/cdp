const EVENTS = require('../data.js').EVENTS;
const { EventModel } = require('../models/events.js');
const { getAcademicSessionDetails } = require('./academicSessionService.js');


const getFullEventList = () => {
    return EVENTS;
};

const getEventDetails = (id) => {
    return EVENTS.find((event) => event.id === parseInt(id));
};

const addAnEvent = async (body) => {
    const verdict = "Event added successfully!";

    const session = await getAcademicSessionDetails();

    if (!session) {
        return "Error adding event. No academic session found.";
    }
    try {
        let sessionDoc = await EventModel.findOne({ session: session });
        if (!sessionDoc) {
            sessionDoc = new EventModel({ session: session, events: [] });
        }
        const newEvent = {
            name: body.name,
            details: body.details,
            dateTime: body.dateTime,
        };
        console.log(newEvent);

        sessionDoc.eventList.push(newEvent);
        await sessionDoc.save();
    } catch (error) {

        return "Error adding event";
    }

    return verdict;
}

module.exports = {
    getFullEventList,
    getEventDetails,
    addAnEvent
};