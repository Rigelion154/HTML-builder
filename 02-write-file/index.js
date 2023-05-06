const fs = require('fs');
const path = require('path');
const process = require('process');
const {stdin, stdout} = process
const random = ['More text please!', 'I say MORE!', 'Do you understand me? MOOORE!', 'Ah shit, here we go again...']
let index = 0
const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'))

stdout.write(`Hello! Enter your messages(to exit, press "ctl + c" or type "exit" in the console)\n`)

stdin.on('data', data => {
    if (data.toString().trim() === 'exit') {
        stdout.write('Is it all? Phhh... Ok, Goodbye\n')
        process.exit()
    }
    stdout.write(`${random[index]}\n`)
    index++
    if (index > random.length-1) index = 0;
    writeStream.write(data)
})

process.on('SIGINT', ()=> {
    stdout.write('Is it all? Phhh... Ok, Goodbye!\n')
    process.exit()
})


process.stdin.resume();

