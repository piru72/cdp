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

module.exports = { EventModel };