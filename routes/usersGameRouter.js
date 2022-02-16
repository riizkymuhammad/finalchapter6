const UsersGameController = require('../controller/usersGameController');

const usersGameRouter = require('express').Router();

// ambil semua data dari students di db
usersGameRouter.get("/hello", UsersGameController.renderHello)
usersGameRouter.get("/", UsersGameController.viewAll)
usersGameRouter.get("/add", UsersGameController.getAddForm)
usersGameRouter.post("/add", UsersGameController.addUsers)
usersGameRouter.get("/:id/delete", UsersGameController.deleteUser)
usersGameRouter.get("/:id/edit", UsersGameController.getEditForm)
usersGameRouter.post("/:id/edit", UsersGameController.editUser)
usersGameRouter.get("/:id", UsersGameController.viewById)
usersGameRouter.get("/cari/:email", UsersGameController.viewByEmail)


module.exports = usersGameRouter;