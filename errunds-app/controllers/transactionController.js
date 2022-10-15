const transactionModel = require('../models/transactionDB');

module.exports = {

  // Get all transactions
  getAll(req, res, next) {
    transactionModel.index()
      .then(txns => {
        console.log(txns);
        res.locals.transactions = txns;
        next();
      })
      .catch(e => next(e));
  },

  // Get one transaction by id
  getOne(req, res, next) {
    const id = req.params.id;
    transactionModel.findById(id)
      .then(txn => {
        console.log(txn);
        res.locals.transaction = txn;
        next();
      })
      .catch(e => next(e));
  },

  // Create a transaction
  create(req, res, next) {
    const id = req.params.id;
    transactionModel.create(id)
      .then(txn => {
        console.log(txn);
        res.locals.transaction = txn;
        next();
      })
      .catch(e => next(e));
  },

  

}