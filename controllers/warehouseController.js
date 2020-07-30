const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));


router.get('/warehouse-replenish', (req,res)=>{
    res.render('partials/warehouse/warehouse_replenish', {layout:'main'});
});

router.get('/warehouse-check-reserve', (req,res)=>{
    res.render('partials/warehouse/check_reserve', {layout:'main'});
});

router.get('/warehouse-supplement-story', (req,res)=>{
    res.render('partials/warehouse/supplement_story', {layout:'main'});
});



module.exports = router;