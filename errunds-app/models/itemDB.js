const { db, pgp } = require('../config/connection');

module.exports = {

  // Find all items
  index() {
    return db.many(`
      SELECT *
      FROM items
    `);
  },

  // Find an item by id
  findById(id) {
    return db.one(`
      SELECT *
      FROM items
      WHERE id = $1`, id);
  },

  // Create an item
  create(item) {
    return db.one(`
      INSERT INTO items (name, price, quantity)
      VALUES ($/name/, $/price/, $/quantity/)
      RETURNING *`, item);
  },

  // Create items involved with a txn in DB
  saveTxnItems(items) {
    return db.one(`
      INSERT INTO transaction_item (transaction_id, item_id)
      VALUES ($/transaction_id/, $/item_id/)
      RETURNING *`, items);
  },

  // Update an item based on id
  update(item) {
    return db.one(`
      UPDATE items i
      SET 
      name = $/name/,
      price = $/price/,
      quantity = $/quantity/
      WHERE i.id = $/id/
      RETURNING *`, item);
  },

}
