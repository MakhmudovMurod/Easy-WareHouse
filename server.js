//Defining Npm | Core | File  modules
const path = require('path');
const express = require('express');
const handlebars = require('handlebars');
const exphbs= require('express-handlebars');
const bodyParser = require('body-parser');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const passport = require('passport');
const passprt_local = require('passport-local');
const session = require('express-session');
const bcrypt = require('bcrypt');


//Calling databse config file
const db  = require('./models/db');

//Connecting to Sqlite Database via Sequelizer
try {
    db.sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  


//Start Express Server
const app = express();
const PORT = process.env.PORT || 3000;


//Static Files  Directory Path
const publicDirectoryPath = path.join(__dirname, '/public');


//Bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configure sessions to keep track of our user's login status
app.use(session({ secret: "secretstringstupidonebigcha", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


//Configuring Views engine
app.set('views', path.join(__dirname,'/views/'));

app.engine('hbs', exphbs({
    defaultLayout: 'main', 
    layoutsDir:__dirname + '/views/layouts',
    extname:'hbs',
    handlebars:allowInsecurePrototypeAccess(handlebars) 
}));

app.set('view engine', 'hbs');
 
app.use(express.static(publicDirectoryPath));


//Routes

app.use('/dashboard', require('./controllers/dashboardController'));
app.use('/deals', require('./controllers/dealsController'));
app.use('/product', require('./controllers/productController'));
app.use('/', require('./controllers/userController'));
app.use('/warehouse', require('./controllers/warehouseController'));
app.use('/client', require('./controllers/clientController'));


app.listen(PORT,()=>{
    console.log(`Express server started at port : ${PORT}` );
});


