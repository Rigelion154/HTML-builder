const fs = require('fs');
const path = require('path');
const {stdout} = process
const filesPath = path.resolve(__dirname, 'files');
const copyFilesPath = path.resolve(__dirname, 'files-copy')

fs.mkdir(copyFilesPath, {recursive: true}, (err) => {
    if (err) {
        throw err
    }
})

function copyFiles() {
    if (copyFilesPath) {
        fs.readdir(copyFilesPath, (err, files) => {
            if (err) {
                throw err
            }
            files.forEach(file => {
                fs.unlink(`${copyFilesPath}/\\${file}`, err => {
                    if (err) throw err
                })
            })
        })
    }

    fs.readdir(filesPath, (err, files) => {
        if (err) {
            throw err
        }
        files.forEach(file => {
            fs.copyFile(`${filesPath}/\\${file}`, `${copyFilesPath}/\\${file}`, err => {
                if (err) throw err
            })
        })
    })
    stdout.write(`Files copied successfully!\nRefresh your folder!\n`)
}

copyFiles();


