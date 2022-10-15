const router = require('express')();
const itemController = require('../controllers/itemController');

// Get all items at: http://localhost:3000/items
router.get('/', itemController.getAll,
  (req, res) => res.json(res.locals.items)
);

// Get one item at: http://localhost:3000/items/:id
router.get('/:id', itemController.getOne,
  (req, res) => res.json(res.locals.item)
);

// Update a single items properties at: http://localhost:3000/items/:id
router.put('/:id', itemController.update,
  (req, res) => res.json(res.locals.item)
);

// Create item at: http://localhost:3000/items
router.post('/', itemController.create,
  (req, res) => res.json(res.locals.item)
);

module.exports = router;
