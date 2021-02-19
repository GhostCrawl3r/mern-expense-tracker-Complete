const Transaction = require('../Models/Transaction.model');

//@Desc  Get all transactions
//@Route GET /api/v1/transactions
//@Access Public
exports.getTransactions = async (req, res, next) => {
  try {
   const transactions = await Transaction.find();
   
   return res.status(200).json({
     success: true,
    count: transactions.length,
    data: transactions
   });
   
  } catch (e) {
   return res.send(500),json({
    success: false,
    error: 'Server Error'
   });
   
  }
}

//@Desc Add transaction
//@Route POST /api/v1/transactions
//@Access Public
exports.addTransaction = async (req, res, next) => {
 const { text, amount } = req.body;
}

//@Desc Delete transaction
//@Route DELETE /api/v1/transactions/:id
//@Access Public
exports.deleteTransaction = async (req, res, next) => {
 res.send('DELETE Transaction');
}

