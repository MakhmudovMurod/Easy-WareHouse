const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const db  = require('../models/db');
const { sequelize } = require('../models/db');
const Client = db.clients;
const Product = db.products;

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));


router.get('', (req,res)=>{
    Client.count().then(client_count =>{

        
        

        res.render('partials/dashboard/dashboard',{client_count});

    })


});



module.exports = router;