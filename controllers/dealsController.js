const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const db = require('../models/db');
const Deal = db.deals;
const Client = db.clients;


const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

//Adding new Deal
router.get('/deals-create', (req,res)=>{
    
    // Deal.create()
    res.render('partials/deals/deals_create', {layout:'main'});
});

//Getting Succesful Deals list
router.get('/deals-succes',(req,res)=>{
    res.render('partials/deals/deals_suc',{layout:'main'});
});


//Problematic Deals
router.get('/deals-problem',(req,res)=>{
    res.render('partials/deals/deals_prb',{layout:'main'});
});



router.get('/deals-history',(req,res)=>{

    Deal.findAll()
    .then(deals=> 
    
        
        
         
        res.render('partials/deals/deals_history',{deals})
        
        )


    .catch(err => console.log(err));
    
});



module.exports = router;