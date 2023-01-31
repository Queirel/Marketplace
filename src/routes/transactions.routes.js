const { Router } = require("express")
const { updateTransaction, getTransaction, getTransactions, saveTransaction } = require("../controllers/transactions.controllers")
const router = Router()

router.get('/', getTransactions)
router.post('/', saveTransaction)
router.get('/:id', getTransaction)
router.put('/:id', updateTransaction)
// router.delete('/:id', deleteTransaction)

module.exports = router