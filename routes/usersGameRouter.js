const UsersGameController = require('../controller/usersGameController');

const usersGameRouter = require('express').Router();

// ambil semua data dari students di db
usersGameRouter.get("/hello", UsersGameController.renderHello)
usersGameRouter.get("/", UsersGameController.viewAll)
usersGameRouter.get("/add", UsersGameController.getAddForm)
usersGameRouter.post("/add", UsersGameController.addStudent)
usersGameRouter.get("/:id/delete", UsersGameController.deleteStudent)
usersGameRouter.get("/:id/edit", UsersGameController.getEditForm)
usersGameRouter.post("/:id/edit", UsersGameController.editStudent)
usersGameRouter.get("/:id", UsersGameController.viewById)
usersGameRouter.get("/cari/:email", UsersGameController.viewByEmail)


module.exports = usersGameRouter;