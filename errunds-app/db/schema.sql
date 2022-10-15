DROP TABLE IF EXISTS transaction_item;
DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS items;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(64) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW ()
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW ()
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name TEXT,
  price FLOAT NOT NULL,
  quantity INTEGER DEFAULT 0
);

CREATE TABLE transaction_item (
  transaction_id INTEGER REFERENCES transactions (id) ON DELETE CASCADE,
  item_id INTEGER REFERENCES items (id) ON DELETE CASCADE
);
