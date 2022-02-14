
const usersGameRouter = require('./usersGameRouter')
const biodataGameRouter = require('./usersGameRouter')
const historyGameRouter = require('./historyGameRouter')

const router = require('express').Router()


router.get("/", (req, res) => {
  res.render("home")
})

router.use("/users", usersGameRouter)
router.use("/biodata", biodataGameRouter)
router.use("/history", historyGameRouter)


module.exports = router