const Router = require('koa-router');
const router = new Router();
const { verifyTokenAndRole } = require('../middlewares/authMiddleware.js');
const { getAllPanelMembers, getPanelMembersById, getAllPositions, getPanelMembersBalance } = require('../controllers/panelController.js');

// router.get('/members/:id', verifyTokenAndRole('admin'), getPanelMembersById); mmiddlewares/authMiddleware.js

router.get('/members', getAllPanelMembers);
router.get('/members/:id', getPanelMembersById);
router.get('/positions', getAllPositions);
router.get('/balance/:id', getPanelMembersBalance);

module.exports = router;
