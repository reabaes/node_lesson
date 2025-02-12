// Global objects

//console.log(global);

setTimeout(() => {
   console.log('in the timeout'); // show base on the time set up
   clearInterval(int); // stop the iterval
},3000); 

const int = setInterval(() => {
    console.log ('in the interval');
},1000); // show every 1sec 

/*console.log (__dirname); // show the full path
console.log (__filename); // show the ful path with filename */







