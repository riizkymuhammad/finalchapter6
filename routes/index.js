
const usersGameRouter = require('./usersGameRouter')
const biodataGameRouter = require('./usersGameRouter')
const historyGameRouter = require('./historyGameRouter')
const authRouter = require('./authRouter')

const router = require('express').Router()


router.get("/", (req, res) => {
  res.render("login")
})

router.use("/users", usersGameRouter)
router.use("/biodata", biodataGameRouter)
router.use("/history", historyGameRouter)
router.use("/auth", authRouter)


module.exports = router