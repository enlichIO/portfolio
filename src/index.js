const express = require('express')
const path=require('path')

const app = express();
app.set('view engine','hbs');

const cla=require('../public/js/classes');
const public_Dir_path = path.join(__dirname,'../public')
app.use(express.static(public_Dir_path))
vin=new cla.constructor('vineria')
img=''








app.get('/', function(req, res){
  res.render("index");
})
app.listen(5000)