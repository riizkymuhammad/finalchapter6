const BiodataGameController = require('../controller/biodataGameController');

const biodataGameRouter = require('express').Router();

// ambil semua data dari students di db
biodataGameRouter.get("/hello", BiodataGameController.renderHello)
biodataGameRouter.get("/", BiodataGameController.viewAll)
biodataGameRouter.get("/add", BiodataGameController.getAddForm)
biodataGameRouter.post("/add", BiodataGameController.addStudent)
biodataGameRouter.get("/:id/delete", BiodataGameController.deleteStudent)
biodataGameRouter.get("/:id/edit", BiodataGameController.getEditForm)
biodataGameRouter.post("/:id/edit", BiodataGameController.editStudent)
biodataGameRouter.get("/:id", BiodataGameController.viewById)
biodataGameRouter.get("/cari/:email", BiodataGameController.viewByEmail)


module.exports = biodataGameRouter;