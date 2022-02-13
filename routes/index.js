
const studentsRouter = require('./usersGameRouter')

const router = require('express').Router()


router.get("/", (req, res) => {
  res.render("home")
})

router.use("/students", studentsRouter)


module.exports = router