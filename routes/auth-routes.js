const router = require('express').Router();
const passport = require("passport");

//pg de login
router.get('/login', (req, res)=>{
    res.render('login');
});


//login do auth(c passport)
router.get('/fb', (req, res)=>{
    passport.authenticate('facebook')
    res.redirect('/');
});


module.exports = router;