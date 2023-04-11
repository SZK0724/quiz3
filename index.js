const express = require('express')
const app = express()
const port = 5000

app.use(express.json())

app.post('/login', (req, res) => {
    console.log(req.body)

    let result=login(req.body.username,req.body.password)
    res.send(result)
  })

app.get('/', (req, res) => {
  res.send('halloooooooooooooooooo!')
})

app.get('/bye', (req, res) => {
    res.send('bye bye')
  })

  app.get('/sam', (req, res) => {
    res.send('Name:SAM ZHI KANG')
    res.send('Matrix:B022120028')
  })

app.post('/register', (req, res) => {
  let result=register(
    req.body.username,
    req.body.password,
    req.body.name,
    req.body.email)
    res.send(result)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function login(reqUsername,reqPassword){
  let matchUser = dbUsers.find(user=>user.username==reqUsername ) //find base on element in array 
  //console.log(matchUser)
  

  if(!matchUser) 
  return "User not found!"

  if(matchUser.password==reqPassword){
      console.log("Correct password")
      return matchUser
  }
  else {
      return "Invalid password"
  }
}

function register(reqUsername,reqPassword,reqName,reqEmail){
  dbUsers.push({
      username:reqUsername,
      password:reqPassword,
      name:reqName,
      email:reqEmail
  })
}

let dbUsers=[
  {
      username:"Soo",
      password:"123456",
      name:"Soo",
      email:"Soo@student.utem.edu.my"
  },
  {
      username:"Sam",
      password:"1wer",
      name:"Sam Zhi Kang",
      email:"b022120028@student.utem.edu.my"
  },
  {
      username:"Kiew",
      password:"ewef4",
      name:"Kiew Yan hui",
      email:"b022120024@student.utem.edu.my"
  }
]