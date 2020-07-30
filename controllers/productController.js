const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const db  = require('../models/db');
const Product = db.products;
const Client = db.clients;

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

//Getting Product List
router.get('/price-list', (req,res)=>{
    Product.findAll()
    .then(products=>
    
        res.render('partials/products/product_price', {products})
    )
    
    .catch(err => console.log(err));
    
});


//Adding a new Product
    router.get('/product-create',(req,res)=>{

        // Insert into table
        Client.create({
            first_name:"Anvar",
            company:"space_x",
            phone_number:"998901234567",
            dept:"234343"
        })

        // .then(product => res.redirect('partials/products/product_create',{layout:'main'}))
        // .catch(err =>console.log(err));

        res.render('partials/products/product_create',{layout:'main'});
    });




router.get('/product-edit',(req,res)=>{
    res.render('partials/products/product_edit',{layout:'main'});
});




module.exports = router;