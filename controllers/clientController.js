const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
 

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

//Getting 
router.get('/client-list', (req,res)=>{
    res.render('partials/clients/clients', {layout:'main'});
});


//Adding a new Product
router.get('/client-create',(req,res)=>{
    res.render('partials/clients/clients_create', {layout:'main'});
});


router.get('/client-profile', (req,res)=>{
    res.render('partials/clients/client_profile', {layout:'main'});
});




module.exports = router;