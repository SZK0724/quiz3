const express = require('express')
const app = express()
const port = 3002

app.use(express.json())  //middleware function that is used to parse（解析） incoming JSON data.

app.post('/register', (req, res) => {
  let result=register(
    req.body.username,
    req.body.password,
    req.body.name,
    req.body.email)

    res.send(result)
})

app.post('/login', (req, res) => {
    console.log(req.body)  //  if use console.log in get/post, it will display the output in terminal not in client Respond!

    let result=login(req.body.username,req.body.password)

    res.send(result)     // This would send the JSON object back to the client in response to their request.
})

app.get('/admin', (req, res) => {
  res.send(dbUsers)   //See all the user profile by GET
})

app.get('/', (req, res) => {
    res.send('halloooooooooooooooooo!')
    console.log("123") //  if use console.log in get/post, it will display the output in terminal not in client Respond!
})
  
app.get('/bye', (req, res) => {
      res.send('bye bye')
     
})
  
app.get('/sam', (req, res) => {
      res.send('Name:O HaeWon')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
//app.listen used to start the HTTP server and start listening for incoming requests.
/*called to start the server listening on port 3000. Once the server has started, 
the callback function logs a message to the console.*/

function login(reqUsername,reqPassword){
  let matchUser = dbUsers.find(user=>user.username==reqUsername ) //find base on element in array 
  //console.log(matchUser)
  

  if(!matchUser) 
  return "User not found!"

  if(matchUser.password==reqPassword){
      //console.log("Correct password")
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
  return "account created"
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
      password:"1234",
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