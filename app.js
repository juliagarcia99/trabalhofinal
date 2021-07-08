const express = require('express');
const authRoutes = require('./routes/auth-routes');
const app = express();
const passport = require("passport");
const path = require('path');

const server = require('http').createServer(app);
const io =require('socket.io')(server);
const axios = require('axios');


var author;


let messages = [];


io.on('connection', socket => {

  socket.on('sendMessage', data =>{
    messages.push(data);  
  })
})







app.get('/auth',(req,res)=>{
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=fe95143164037aafd4ce`
  )
})
app.get('/logged',({ query: {code}},res)=>{
  const body ={
    client_id: "fe95143164037aafd4ce",
    client_secret: "6c4a968f2fd5050f4b2d094d358ddc8cdf29760f",
    code
  }
  const opts = { headers: { accept: 'application/json'}};
  axios
    .post('https://github.com/login/oauth/access_token',body,opts)
    .then((_res)=> _res.data.access_token)
    .then((token)=>{
      console.log('My token: ',token);
      axios.get("https://api.github.com/user",{headers:{"Authorization":`Bearer ${token}`}})
      .then((res)=>{
        var response = res.data;
        console.log(response.login);
        author = response.login;

      })
      res.redirect("/")
    })
    .catch((err)=> res.status(500).json({ err: err.messages}))
})






app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');

app.use('/auth', authRoutes);

const port = 3000

app.get('/', (req, res) => {
  res.render('home');
})





app.get('/chat',(req,res)=>{
  res.render('chat', {author: author});
})


server.listen(3000);

