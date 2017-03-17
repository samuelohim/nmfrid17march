const eo = require('express');
app = eo();
port = process.env.PORT || 8080;

ejl = require('express-ejs-layouts');

app.use(ejl);
app.set('view engine', 'ejs');
eo.static(__dirname+'/public');







app.use(require('./app/router.js'));

app.listen(port, ()=>{
  console.log(`Listening on port: ${port}`);
});