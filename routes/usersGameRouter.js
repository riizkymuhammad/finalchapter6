const StudentController = require('../controller//usersGameController');

const studentsRouter = require('express').Router();

// ambil semua data dari students di db
studentsRouter.get("/hello", StudentController.renderHello)
studentsRouter.get("/", StudentController.viewAll)
studentsRouter.get("/add", StudentController.getAddForm)
studentsRouter.post("/add", StudentController.addStudent)
studentsRouter.get("/:id/delete", StudentController.deleteStudent)
studentsRouter.get("/:id/edit", StudentController.getEditForm)
studentsRouter.post("/:id/edit", StudentController.editStudent)
studentsRouter.get("/:id", StudentController.viewById)
studentsRouter.get("/cari/:email", StudentController.viewByEmail)


module.exports = studentsRouter;