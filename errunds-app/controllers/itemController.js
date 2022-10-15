const itemModel = require('../models/itemDB');

module.exports = {

  // Get all items from DB
  getAll(req, res, next) {
    itemModel.index()
      .then(items => {
        console.log(items);
        res.locals.items = items;
        next();
      })
      .catch(e => next(e));
  },

  // Get one item from DB by id
  getOne(req, res, next) {
    const id = req.params.id;
    itemModel.findById(id)
      .then(item => {
        console.log(item);
        res.locals.item = item;
        next();
      })
      .catch(e => next(e));
  },

  // Create an item in DB
  create(req, res, next) {
    const item = req.body;
    itemModel.create(item)
      .then(item => {
        console.log(item);
        res.locals.item = item;
        next();
      })
      .catch(e => next(e));
  },

  // Create relationship between txn and items in DB
  createItemsForTxn(req, res, next) {
    const items = { transaction_id: req.params.id, ...req.body }
    itemModel.saveTxnItems(items)
      .then(items => {
        console.log(items);
        res.locals.items = items;
        next();
      })
      .catch(e => next(e));
  },

  // Update an item in the DB
  update(req, res, next) {
    const item = { id: req.params.id, ...req.body }
    itemModel.update(item)
      .then(item => {
        console.log(item)
        res.locals.item = item;
        next();
      })
      .catch(e => next(e));
  }

}