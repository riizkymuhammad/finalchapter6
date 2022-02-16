const BiodataGameController = require('../controller/authController');

const biodataGameRouter = require('express').Router();

// ambil semua data dari students di db
biodataGameRouter.get("/login", BiodataGameController.login)
biodataGameRouter.get("/register", BiodataGameController.register)
biodataGameRouter.post("/register", BiodataGameController.cekregister)
biodataGameRouter.post("/login", BiodataGameController.ceklogin)
biodataGameRouter.get("/add", BiodataGameController.getAddForm)
biodataGameRouter.post("/add", BiodataGameController.addStudent)
biodataGameRouter.get("/:id/delete", BiodataGameController.deleteStudent)
biodataGameRouter.get("/:id/edit", BiodataGameController.getEditForm)
biodataGameRouter.post("/:id/edit", BiodataGameController.editStudent)
biodataGameRouter.get("/:id", BiodataGameController.viewById)
biodataGameRouter.get("/cari/:email", BiodataGameController.viewByEmail)


module.exports = biodataGameRouter;