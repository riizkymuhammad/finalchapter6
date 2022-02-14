const HistoryGameController = require('../controller/biodataGameController');

const historyGameRouter = require('express').Router();

// ambil semua data dari students di db
historyGameRouter.get("/hello", HistoryGameController.renderHello)
historyGameRouter.get("/", HistoryGameController.viewAll)
historyGameRouter.get("/add", HistoryGameController.getAddForm)
historyGameRouter.post("/add", HistoryGameController.addStudent)
historyGameRouter.get("/:id/delete", HistoryGameController.deleteStudent)
historyGameRouter.get("/:id/edit", HistoryGameController.getEditForm)
historyGameRouter.post("/:id/edit", HistoryGameController.editStudent)
historyGameRouter.get("/:id", HistoryGameController.viewById)
historyGameRouter.get("/cari/:email", HistoryGameController.viewByEmail)


module.exports = historyGameRouter;