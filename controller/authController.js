const { Student } = require("../models")
const fs = require('fs') 
const { v4: uuidv4 } = require('uuid')

class BiodataGameController {
  static renderHello(req, res) {
    res.send("hello")
  }

   static login(req, res) {
    res.render("login")
  }

    static register(req, res) {
    res.render("register")
  }



    static ceklogin(req, res) {
    const { username, password } = req.body
    console.log(username,password)
  const data = fs.readFileSync('data/data.json', "utf-8") // disini data masih bentuk string
  const parsedData = JSON.parse(data)
  console.log(parsedData)
  console.log(username)
  const checkUser = parsedData.find((user) => user.username == username);
  console.log(checkUser)
  if(!checkUser){
    res.status(401)
    res.redirect('/login')
    console.log('Username tidak ditemukan')
  }else if (checkUser.password == password){
    res.status(200)
    res.redirect('/play')
    console.log('Berhasil Masuk')
  }else{
    res.status(401)
    res.redirect('/login')
    console.log('Password salah')
    alert("Password anda salah")
  }
  }

   static cekregister(req, res) {
     const { username, password } = req.body
    const data = fs.readFileSync('data/data.json') // disini data masih bentuk string
    const parsedData = JSON.parse(data)
    const newUser = {
    id: uuidv4(),
    username,
    password
    }
    parsedData.push(newUser)
    fs.writeFileSync('data/data.json', JSON.stringify(parsedData, null, 2))
    res.status(201)
    console.log(newUser, 'new user created')
    res.redirect('/users/')
  }



  static viewAll(req, res) {
    // Student.findAll({
    //   order: [["id", 'ASC']]
    // })
    //   .then((data) => {
    //     res.render("students", { data })
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
      res.render("usersGame/index")
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

  static addStudent(req, res) {
    // bikin penampung object buat input data ke db
    let newStudent = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      birthday: req.body.birthday
    }

    Student.create(newStudent)
      .then((_) => {
        res.redirect("/students")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static getEditForm(req, res) {
    const id = req.params.id
    Student.findByPk(id)
      .then((data) => {
        console.log(data)
        res.render('students/edit', { data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static editStudent(req, res) {
    const id = req.params.id
    let updatedStudent = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      birthday: req.body.birthday
    }
    Student.update(updatedStudent, {
      where: {
        id: id
      }
    })
      .then(() => {
        res.redirect("/students")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static deleteStudent(req, res) {
    const id = req.params.id
    Student.destroy({
      where: { id: id }
    })
      .then(() => {
        res.redirect("/students")
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = BiodataGameController;