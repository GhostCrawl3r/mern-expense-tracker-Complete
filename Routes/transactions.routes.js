const express = require('express');
const router = express.Router();
const {getTransactions} = require('../Controllers/transactions.controller');

router.route('/').get(getTransactions);

module.exports = router;
