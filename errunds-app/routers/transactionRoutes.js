const router = require('express')();
const transactionController = require('../controllers/transactionController');
const itemController = require('../controllers/itemController');
const userController = require('../controllers/userController');

// Get all transactions at: http://localhost:3000/transactions
router.get('/', transactionController.getAll,
  (req, res) => res.json(res.locals.transactions)
);

// Get one transaction at: http://localhost:3000/transactions/:id
router.get('/:id', transactionController.getOne,
  (req, res) => res.json(res.locals.transaction)
);

// Create items involved with a txn at: http://localhost:3000/items
router.post('/:id', itemController.createItemsForTxn,
  (req, res) => res.json(res.locals.items)
);

// Create transactions at: http://localhost:3000/transactions
router.post('/users/:id/transactions', transactionController.create,
  (req, res) => res.json(res.locals.transaction)
);

module.exports = router;