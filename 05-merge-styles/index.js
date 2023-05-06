const fs = require('fs');
const path = require('path');
const stylesPath = path.resolve(__dirname, 'styles');
const stylesDir = path.resolve(__dirname, 'project-dist');
const writeStream = fs.createWriteStream(path.join(stylesDir, 'bundle.css'))

fs.readdir(stylesPath, {withFileTypes:true} ,(err, files) => {
    if (err) throw err
    files.forEach(file => {
        if(path.extname(file.name) === '.css' && !file.isDirectory()) {
            fs.readFile(`${stylesPath}/\\${file.name}`, {encoding: "utf-8"} ,(err, fileText)=> {
                writeStream.write(fileText)
            })
        }
        });

})