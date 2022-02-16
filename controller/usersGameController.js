const { UserGame } = require("../models")

class UsersGameController {
  static renderHello(req, res) {
    res.send("hello")
  }

  static viewAll(req, res) {
    UserGame.findAll({
      order: [["id", 'ASC']]
    })
      .then((data) => {
        res.render("usersGame/index", { data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static viewById(req, res) {
    const id = req.params.id
    Student.findByPk(id)
      .then((data) => {
        // karena di ejs untuk menampilkan datanya data wajib berupa array, karena nampilin datanya itu prosesnya nge loop data, maka dari itu datanya dibuat menjadi arrray
        data = [data]
        res.render("students", { data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static viewByEmail(req, res) {
    const email = req.params.email
    Student.findOne({
      where: { email: email }
    })
      .then((data) => {
        data = [data]
        res.render("students", { data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static getAddForm(req, res) {
    res.render("usersGame/create")
  }


  static addUsers(req, res) {
    // bikin penampung object buat input data ke db
    let newUsers = {
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }

    UserGame.create(newUsers)
      .then((_) => {
        res.redirect("/users")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static getEditForm(req, res) {
    const id = req.params.id
    UserGame.findByPk(id)
      .then((data) => {
        console.log(data)
        res.render('usersGame/edit', { data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static editUser(req, res) {
    const id = req.params.id
    let updatedUser = {
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }
    UserGame.update(updatedUser, {
      where: {
        id: id
      }
    })
      .then(() => {
        res.redirect("/users")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static deleteUser(req, res) {
    const id = req.params.id
    UserGame.destroy({
      where: { id: id }
    })
      .then(() => {
        res.redirect("/users")
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = UsersGameController;