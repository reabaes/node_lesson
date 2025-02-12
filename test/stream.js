const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt',{encoding: 'utf8'});  // utf8 use to  convert the buffers into readable format
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//piping
readStream.pipe(writeStream);

// readStream.on('data', (chunk) => { // .on is the event listener of data
//     console.log('---------NEW CHUNK-----------');
//     //console.log(chunk.toString());
//     console.log(chunk);

//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

// readStream.on('end', () => {
//     console.log('Stream has finished reading.');
// });

// readStream.on('error', (err) => {
//     console.error('Error reading file:', err);
// });
