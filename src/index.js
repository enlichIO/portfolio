import express from 'express';
const app = express();
app.set('view engine',hbs)
app.get('/', function(req, res){
  res.send('Hello World!');
})

app.listen(3000)