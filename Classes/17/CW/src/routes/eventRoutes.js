const Router = require('koa-router');
const { createEvent,
    getEventById,
    getAllEvents } = require('../controllers/eventController.js');

const router = new Router();

router.post('/', createEvent);
router.get('/:id', getEventById);
router.get('/', getAllEvents);

module.exports = router;
