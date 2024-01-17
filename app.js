const {writeFile} = require('fs')


writeFile('./Content/first-file.txt', 'This is the first file written by Node.', (err, result) =>{
    if(err){
        console.log(err)
        return;
    }

    console.log('completed');
})

console.log('starting a new role')