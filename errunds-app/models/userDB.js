const { db, pgp } = require('../config/connection');

module.exports = {

  // Find all users
  index() {
    return db.many(`
      SELECT * 
      FROM users;
    `);
  },

  // Find a single user by their id
  findById(id) {
    return db.one(`
      SELECT *
      FROM users
      WHERE id = $1`, id);
  },

  // Query that will show a users items in a specific transaction NOT WORKING IN POSTMAN BUT WILL WORK IN SQL
  findUserTransaction(id) {
    return db.many(`
      SELECT i.name, i.price, t.created_at
      FROM items i
      JOIN transaction_item ti
      ON i.id = ti.item_id
      JOIN transactions t
      ON ti.transaction_id = t.id
      WHERE t.user_id = $1`, id);
  },

  // Create a user
  create(user) {
    return db.one(`
      INSERT INTO users (first_name, last_name, phone_number)
      VALUES ($/first_name/, $/last_name/, $/phone_number/)
      RETURNING *`, user);
  },

}