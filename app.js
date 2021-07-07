const express = require('express');
const authRoutes = require('./routes/auth-routes');
const app = express();

app.set('view engine', 'ejs');

app.use('/auth', authRoutes);

const port = 3000

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log('ta rodando');
})

