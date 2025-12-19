// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();

// configure express to use handlebars as templating engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    // use this layout by default - if you have different layout
    // for say home page - you can toggle this in your code
    defaultLayout: 'default',
    // set location of layouts
    layoutsDir: 'views/layouts',
    // set location of partials - header, footer, etc
    partialsDir: 'views/partials',
  })
);
// set the view engine to handlesbards
app.set('view engine', 'hbs');
// where to find all of the view
app.set('views',  'views');
// where to find static files - css, images, js
app.use(express.static('public'));

// home page or home route
app.get('/', (req, res) => {

  // set active or not for navigation
  state={'home' : true, about : false}
  // set specifics for <head>
  head={'title': "HomePage"}
  res.render('home', {state:state, head:head});
  // send this to terminal where node app is running
  console.log('home')

});

//About Us Page
app.get('/about', (req, res) => {
    state={'home' : false, about : true}
    head={'title': "About Us"}
    res.render('about', { state:state, head:head});
    console.log('about')
  });

  //Shop Page
app.get('/store', (req, res) => {
    state={'home' : false, store : true}
    head={'title': "The Store"}
    res.render('store', { state:state, head:head});
    console.log('store')
  });

  //Contact Us Page
  app.get('/contact', (req, res) => {
    state={'home' : false, contact : true}
    head={'title': "Contact Us"}
    res.render('contact', { state:state, head:head});
    console.log('contact')
  });

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

