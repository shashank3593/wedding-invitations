let express = require('express');
let path = require('path');
let port = process.env.PORT || 3000;
let app = express();

console.log(__dirname);

app.use(express.static(path.join(__dirname, 'www')));
app.listen(port , (err)=>{
  if(err){
    console.log(err);
  }
  console.log('listening ',port);
});

app.get('/',(req, res)=>{
   res.sendFile('www/index.html', {root: __dirname });
})
