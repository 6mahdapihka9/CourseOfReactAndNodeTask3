const express = require("express");
const port = 3000;
const app = express();
const path = require('path');
const jsonParser = express.json();

const mainRouter = require("./routes/main.notes.routes");


app.use(express.static(path.join(__dirname, 'public')));

app.use("/notes/", jsonParser, mainRouter);


//test request
app.get('/',(req,res)=>{
    res.send({name:'slavik'});
})

app.listen(process.env.PORT || port);
