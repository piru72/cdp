
const Router = require('koa-router');
const { getCurrentTimeWithSeconds, 
    addAnEvent , 
    getFullEventList, 
    getEventDetails } = require('./utils');

const router = new Router();

router.post('/', (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();
   

    ctx.body = {
        responeSummary: 'Add an event to the system',
        verdict : addAnEvent(ctx.request.body),
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };

    ctx.status = 201;
    return;
});

router.get('/:id', (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();
    

    ctx.body = {
        responeSummary: 'Details of a specific event',
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };

    const event = getEventDetails(ctx.params.id);
    if (!event) {
        ctx.status = 404;
        ctx.body.verdict = "Event not found!";
        return;
    }

    ctx.body.verdict = "Event found!";
    ctx.body.event = event;
    ctx.status = 200;
    return;
});


router.get('/', (ctx) => {
    const requestInboundTime = getCurrentTimeWithSeconds();
    ctx.body = {
        events: getFullEventList(),
        requestInboundTime: requestInboundTime,
        requestOutboundTime: getCurrentTimeWithSeconds(),
    };
    return;
});


module.exports = router;