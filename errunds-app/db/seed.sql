INSERT INTO users (first_name, last_name, phone_number) VALUES
  ('William', 'Clayton', '(910) 683-4990'),
  ('John', 'Smith', '(123) 456-7890');

INSERT INTO transactions (user_id) VALUES
  (1),
  (1),
  (2),
  (2);

INSERT INTO items (name, price, quantity) VALUES
  ('Cheese', 0.99, 300),
  ('Bacon', 1.25, 500),
  ('Eggs', 2, 1000);

INSERT INTO transaction_item VALUES 
  (1, 1),
  (1, 2),
  (1, 3),
  (2, 1),
  (2, 3),
  (3, 3),
  (4, 2),
  (4, 3);



