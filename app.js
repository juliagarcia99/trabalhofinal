const express = require('express');
const authRoutes = require('./routes/auth-routes');
const app = express();
const passport = require("passport");
const path = require('path');

const server = require('http').createServer(app);
const io =require('socket.io')(server);


let messages = [];


io.on('connection', socket => {
  console.log(`Socket conectado: ${socket.id}`);

  socket.on('sendMessage', data =>{
    messages.push(data);  
  })
})














app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');

app.use('/auth', authRoutes);

const port = 3000

app.get('/home', (req, res) => {
  res.render('home');
})

app.get('/',(req,res)=>{
  res.render('chat', {author: "LIPOSOOOO"});
})


server.listen(3000);

