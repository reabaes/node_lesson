const express = require('express');
const { title } = require('process');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));


// listen for requests
app.listen(3000);

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

app.get('/about', (req, res) => {
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