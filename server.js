const http = require('http');
const fs = require ('fs'); 
const _ = require('lodash');


const server = http.createServer((req, res) => { //method to create a server
   // console.log('req made');
   //console.log(req.url, req.method);


   //lodash
   const num = _.random(0, 20);
   console.log(num);

   const greet =_.once(() => { //this is a function
    console.log('hello');
   });

   greet(); // call the function greet

   //set header content type
   res.setHeader('Content-Type', 'text/html'); // sent back a html text

   let path = './views/'; // path where all html file in (tawag dine routing)
   switch(req.url) {
    case '/' :
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200; // 200 means OK
        break;
    case '/about-me': 
        res.statusCode = 301; // 301 means RESOURCE MOVED
        res.setHeader('Location','/about'); //redirecting the about-me to the about page
        res.end();
        break;
    default:
        path += '404.html';
        res.statusCode = 404; // 404 means NOT FOUND
        break;
   }

   //send an html file to browser
   fs.readFile(path,(err, data) => {
        if(err){
            console.log(err);
            res.end();
        } 
        else {

            res.write(data);
            res.end();
        }
   })
   
}); 

server.listen(3000, 'localhost', () => {          // listen to the port 
    console.log('listening for requests on port 3000')
});