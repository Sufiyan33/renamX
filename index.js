const fs = require('fs')
const replaceThis = "Sufi"
const replaceWith = "Sufiyan"

try{
    fs.readdir("data", (err, data)=>{
        console.log(Data)
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let newFile = "data/" + item.replaeAll(rep)
            fs.rename("data/" + item, newFile, ()=>{
                console.log("Rename Succesful...")
            })
        }
    })
}catch(err){
    console.log(err)
}
