const fs = require('fs')
const path = require('path')
const replaceThis = "Sufi"
const replaceWith = "Sufiyan"
const preview = false
const folder = __dirname

try{
    fs.readdir(folder, (err, data)=>{
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let oldFile = path.join(folder, item)
            let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith))
            if(!preview){
                fs.rename(oldFile, newFile, ()=>{
                    console.log("Rename Succesful...")
                })
            }else{
                if("data/" + item !== newFile){
                    console.log("data/" + item + " will be renamed to " + newFile)
                }
            }
        }
    })
}catch(err){
    console.log(err)
}
