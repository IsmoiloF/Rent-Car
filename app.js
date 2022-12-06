const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const routes  = require("./routes/index.routes")

const PORT = config.get("port") || 3030
const app = express()
app.use(express.json())
app.use(routes)


async function start(){
    try {
        await mongoose.connect(config.get("dbUri"))
        app.listen(PORT,()=>{
            console.log(`Server ${PORT}da ishga tushdi`);
        })
    } catch (error) {
        console.log(error)
    }
}
start()