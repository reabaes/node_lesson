const fs = require ('fs');
//console.log(fs);

//reading file
/*fs.readFile('./docs/blog.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString()); // Convert the buffer to a string
});

//writing files
fs.writeFile('./docs/del.txt','hello again', () => {
    console.log('file was written');
});*/

// directories
/*if  (!fs.existsSync('./assets')) { //check if the folder doesn't exists it will create the folder
   fs.mkdir('./assets',(err)=> {
        if(err){
            console.log(err);
        }
        console.log('folder created');
    });
} else {      // remove the folder if existss
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}*/

//delete file
if (fs.existsSync('./docs/del.txt')) {
    fs.unlink('./docs/del.txt', (err) => {
        if (err) {
            console.log(err);n
        }
        console.log('file deleted');
    }); // function to delete a file
}