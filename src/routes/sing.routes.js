const { Router } = require("express")
const { singIn, singUp } = require("../controllers/auth.controllers")
const router = Router()

router.post('/in', singIn)
router.post('/up', singUp)

module.exports = router