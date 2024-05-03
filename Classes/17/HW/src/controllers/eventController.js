const { addAnEvent, getFullEventList, getEventDetails } = require('../services/eventService.js');
const { getCurrentTimeWithSeconds } = require('../services/utils.js');
const { Events } = require('../models/events.js')
const { responseVerdicts, responeSummary } = require('../constants/respone.js');

const createEvent = async (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();

    ctx.body = {
        responeSummary: responeSummary.ADD_AN_EVENT,
        verdict: await addAnEvent(ctx.request.body),
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };

    ctx.status = 201;
};

const getEventById = async (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();

    ctx.body = {
        responeSummary: responeSummary.DETAILS_OF_A_SPECIFIC_EVENT,
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };

    const event = getEventDetails(ctx.params.id);
    if (!event) {
        ctx.status = 404;
        ctx.body.verdict = responseVerdicts.EVENT_NOT_FOUND;
        return;
    }

    ctx.body.verdict = responseVerdicts.EVENT_FOUND;
    ctx.body.event = event;
    ctx.status = 200;
};

const getAllEvents = async (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();
    ctx.body = {
        events: getFullEventList(),
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };
};


const deleteEvent = async (ctx) => {

    const requestInboundTime = getCurrentTimeWithSeconds();
    try {
        const id = ctx.params.id;
        const verdict = await Events.deleteEvent(id);

        const responseBody = {
            statusDetails: verdict.statusDetails,
            requestInboundTime: requestInboundTime,
            requestOutboundTime: getCurrentTimeWithSeconds(),
        }
        ctx.response.ok(responseVerdicts.EVENT_NOT_FOUND, responseBody);
    } catch (error) {
        ctx.response.internalError(responseVerdicts.INTERNAL_SERVER_ERROR, requestInboundTime);
    }
};

module.exports = {
    createEvent,
    getEventById,
    getAllEvents,
    deleteEvent
};
