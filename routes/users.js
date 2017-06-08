const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

const testJSON = [
  {
    name: 'Jeff Chen',
    username: 'jeffchen31',
    email: 'jeff@chenjeff.com',
  },
  {
    name: 'Grace Chen',
    username: 'weridducks',
    email: 'grace@chengrace.com',
  },
  {
    name: 'Josh Smith',
    username: 'smithjosh',
    email: 'josh@smithjosh.com',
  },
];

/* GET testJSON page. */
router.get('/sendjson', (req, res, next) => {
  res.json(testJSON);
});

module.exports = router;
