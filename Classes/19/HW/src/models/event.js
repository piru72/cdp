const { getAcademicSessionDetails } = require('../services/academicSession.js');
const mongoose = require('mongoose')
const schema = mongoose.Schema
const eventSchema = new schema({
    session: String,
    eventList: [
        {
            name: String,
            details: String,
            dateTime: Date
        }
    ],

});
const EventModel = mongoose.model('Event', eventSchema);

const Events = {
    async deleteEvent(id) {

        let verdict = null;

        const session = await getAcademicSessionDetails();

        if (!session) {
            
        }
        else {
            
            try {
                let sessionDoc = await EventModel.findOne({ session: session });
                if (!sessionDoc) {
                    verdict = {
                        statusCode : 404,
                        statusDetails : "Session not found",
                    }
                }
                else {
                    const eventIndex = sessionDoc.eventList.findIndex((event) => event.id === id);
                    if (eventIndex === -1) {
                        // the available events 
                        const availableEvents = sessionDoc.eventList.map((event) => event.id);
                        verdict = {
                            statusCode : 404,
                            statusDetails : "Event not found",
                        }

                    }
                    else {
                        sessionDoc.eventList.splice(eventIndex, 1);
                        await sessionDoc.save();
                        verdict = {
                            statusCode : 200,
                            statusDetails : "Event deleted successfully",
                        }
                    }
                }
            } catch (error) {
                verdict = {
                    statusCode : 500,
                    statusDetails : "Internal Server Error",
                }
            }
        }
        return verdict;
    }
}
module.exports = { EventModel, Events };