const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Jeff Chen' });
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
