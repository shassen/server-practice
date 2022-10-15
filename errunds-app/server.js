// Initialize express and other dependencies
const express    = require('express');
const app        = express();
const path       = require('path');
const logger     = require('morgan');
const bodyParser = require('body-parser');
const cors       = require('cors');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const userRouter = require('./routers/userRoutes');
const transactionRouter = require('./routers/transactionRoutes');
const itemRouter = require('./routers/itemRoutes');
app.use('/users', userRouter);
app.use('/transactions', transactionRouter);
app.use('/items', itemRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server is up and listening on port: ${PORT}`)
});

// Testing if server is active
app.get('/test', (req, res) => {
  res.send({ message: 'Server test area' })
})
