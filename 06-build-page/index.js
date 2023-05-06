const fs = require('fs');
const path = require('path');
const projectPath = path.resolve(__dirname, 'project-dist')
const componentsDir = path.resolve(__dirname, 'components');

let dataText = ''
fs.mkdir(projectPath, {recursive: true}, (err) => {
    if (err) {
        throw err
    }
})
async function getComponent () {
const templateData = []
   await fs.readdir(componentsDir, {withFileTypes: true}, (err, files) => {
        if (err) throw err
        files.forEach(file => {
          templateData.push(`{{${path.parse(file.name).name}}}`)
            // fs.readFile('template.html', {encoding: "utf-8"}, (err, data) => {
            //     // dataText = data;
            //     const component = `{{${path.parse(file.name).name}}}`
            //     let newText = data.replace(`${component}`, 'abs')
            //     // console.log(newText)
            //     dataText = newText
            //     console.log(dataText)
            // })
            // console.log(templateData)
        })
    })
   return templateData
}

console.log(getComponent().then());

// console.log(templateData)