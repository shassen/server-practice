const userModel = require('../models/userDB');
const transactionModel = require('../models/transactionDB');

module.exports = {

  // Show all users in table
  getAll(req, res, next) {
    userModel.index()
      .then(users => {
        console.log(users)
        res.locals.users = users;
        next();
      })
      .catch(e => next(e));
  },

  // Show one user based on query string
  getOne(req, res, next) {
    const id = req.params.id;
    userModel.findById(id)
      .then(user => {
        console.log(user)
        res.locals.user = user;
        next();
      })
      .catch(e => next(e));
  },

  // Get a users transactions
  getUserTxn(req, res, next) {
    const id = req.params.id;
    userModel.findUserTransaction(id)
      .then(txn => {
        console.log(txn)
        res.locals.user = txn;
        next();
      })
      .catch(e => next(e));
  },

  // Create new user
  create(req, res, next) {
    const user = req.body;
    console.log(user);
    userModel.create(user)
      .then(user => {
        res.locals.user = user;
        next();
      })
      .catch(e => next(e));
  },

  createUserTxn(req, res, next) {
    const id = req.params.id;
    transactionModel.create(id)
      .then(txn => {
        console.log(txn);
        res.locals.user = txn;
        next();
      })
      .catch(e => next(e));
  },

}