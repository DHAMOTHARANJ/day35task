const express = require("express")
const fs = require("fs")
const path = require("path")
const dirPath = path.join(__dirname, "timestamp")
const app = express()

app.get("/", (req, res)=>{
    let date = new Date();
    const timestampdate = `Last updated: ${date.toUTCString().slice(0,-3)}`;
    fs.writeFileSync(`${dirPath}/current-date-time.txt`, timestampdate, (err)=>{
        if(err){
            console.log("err", err)
        }
    })
    res.send(path.join(dirPath, "current-date-time"));
})

// listen and start a http server in specific port
app.listen(9010, ()=>console.log(`server started in localhost:9010`))

// http://localhost:9010/
