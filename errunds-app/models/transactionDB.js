const { db, pgp } = require('../config/connection');

module.exports = {

  // Find all transactions
  index() {
    return db.many(`
      SELECT *
      FROM transactions
    `);
  },

  // Find one transaction by id
  findById(id) {
    return db.one(`
      SELECT *
      FROM transactions
      WHERE id = $1`, id);
  },

  // Find transactions by date NOT WORKING IN POSTMAN, WORKS IN SQL IF YOU PROVED DATE WHERE $1 VARIABLE IS BELOW
  findDate(date) {
    return db.many(`
    SELECT t.user_id, i.name, i.price, t.created_at
    FROM transactions t
    JOIN transaction_item ti
    ON ti.transaction_id = t.id
    JOIN items i
    ON i.id = ti.item_id
    WHERE to_char(created_at, 'YYYY-MM-DD') = $1`, date)
  },

  // Create a transaction
  create(transaction) {
    return db.one(`
      INSERT INTO transactions (user_id)
      VALUES ($1)
      RETURNING *`, transaction);
  },

}