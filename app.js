const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const { title } = require('process');


//express app
const app = express();

//connection of monggodb
const dbuURI = 'mongodb+srv://nodetuts:987654321@cluster0.bw01i.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0';

//register view engine
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

app.listen(3000);  // listen for requests

//middleware & static files
app.use(express.static('public')); // all the files inside the public will be accessible by the browser
app.use(morgan('dev'));

// app.use((req , res, next) => {
//     console.log('new request made:');
//     console.log('host:', req.hostname);
//     console.log('path:', req.path);
//     console.log('method:', req.method);
//     next(); // indication that do the next code
// });


app.get('/', (req, res) => {
    //res.send('<p> Home Page </p>');
    //res.sendFile('./views/index.html',{ root:__dirname });
    const blogs = [
        {title: 'red', snippet: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
        {title: 'blue', snippet: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
        {title: 'yellow', snippet: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'}
    ];

    res.render('index',{ title: 'Home',blogs});
});

app.get('/about', (req, res,) => {
    //res.send('<p> Home Page </p>');
    //res.sendFile('./views/about.html',{ root:__dirname });
    res.render('about', {title: 'About'});
});


//redirects
// app.get('/about-us',(req, res) => {
//     res.redirect('/about');
// });

app.get('/blogs/create',(req, res) => {
    res.render('create', {title: 'Create a new Blog'});
})

//404 pages
app.use((req, res) => {  //use the use() function in every incoming request
    //res.sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', {title: '404'})
}); 
