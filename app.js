const express = require('express');
const authRoutes = require('./routes/auth-routes');
const app = express();
const passport = require("passport");
const path = require('path');

const server = require('http').createServer(app);
const io =require('socket.io')(server);

io.on('connection', socket=>{
  console.log(`Socket conectado: ${socket.id}`);
})














app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');

app.use('/auth', authRoutes);

const port = 3000

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/chat',(req,res)=>{
  res.render('chat');
})


app.listen(port, () => {
  console.log('ta rodando');
})

