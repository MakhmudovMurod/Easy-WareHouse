const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const passprt_local = require('passport-local');
const session = require('express-session');
const bcrypt = require('bcrypt');
const db  = require('../models/db');
const User = db.user;


const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));


router.get('', (req,res)=>{
    res.render('partials/login/login_page',{layout:false});
});

router.get('/settings', (req,res)=>{
    res.render('partials/login/settings');
});




module.exports = router;