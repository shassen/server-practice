const router = require('express')();
const userController = require('../controllers/userController');
const transactionController = require('../controllers/transactionController');

// Get all users at: http://localhost:3000/users
router.get('/', userController.getAll,
  (req, res) => res.json(res.locals.users)
);

// Get one user at: http://localhost:3000/users/:id
router.get('/:id', userController.getOne,
  (req, res) => res.json(res.locals.user)
);

// Get a users transactions at: http://localhost:3000/users/:id/transactions
router.get('/:id/transactions', userController.getUserTxn,
  (req, res) => res.json(res.locals.user)
);

// Create user at: http://localhost:3000/users
router.post('/', userController.create,
  (req, res) => res.json(res.locals.user)
);

// Create a user txn at: http://localhost:3000/users/:id/transactions
router.post('/:id/transactions', userController.createUserTxn,
  (req, res) => res.json(res.locals.user)
);

module.exports = router;

