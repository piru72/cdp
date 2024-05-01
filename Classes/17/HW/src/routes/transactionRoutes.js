const Router = require('koa-router');
const router = new Router();
const { verifyTokenAndRole } = require('../middlewares/authMiddleware.js');
const { getAllTransactions, addTransaction, getTransactionsByUserId, updateTransactionById } = require('../controllers/transactionController.js');

router.get('/history', getAllTransactions);
router.post('/', addTransaction);
router.get('/:id', getTransactionsByUserId);
router.put('/:id', updateTransactionById);

module.exports = router;
