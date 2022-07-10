const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.json({'data':'Welcome Home'})
})

app.listen(3000, ()=>{
    console.log('Started in 3000...`')
})