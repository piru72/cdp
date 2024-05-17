const Router = require('koa-router');
const { createEvent,
    getEventById,
    getAllEvents,
    deleteEvent } = require('../controllers/event.js');

const router = new Router();

router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.post('/', createEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
