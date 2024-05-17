const Router = require('koa-router');

const { updateAcademicSession,
    getAcademicSession }
    = require('../controllers/academicSessionController.js');

const router = new Router();

router.put('/', updateAcademicSession);
router.get('/', getAcademicSession);

module.exports = router;