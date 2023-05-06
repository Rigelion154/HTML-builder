const process = require('process')
const {stdout} = process
const path = require('path')
const fs = require('fs')
const secretPath = path.resolve(__dirname, 'secret-folder')

fs.readdir(secretPath, {withFileTypes: true}, (err, files) => {
    if (err) {
        throw err
    }
    files.forEach(file => {
        fs.stat(`${secretPath}/\\${file.name}`, (err, stats) => {
            if (err) {
                throw err
            }
            if (!file.isDirectory()) {
                stdout.write(`${path.parse(file.name).name} - ${path.extname(file.name).slice(1)} - ${Math.floor((stats.size / 1024) * 100) / 100} kb \n`)
            }
        })
    })
})