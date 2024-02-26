import app from './src/app.js';
import config from './src/config/config.js';
import db from './src/model/index.js';

app.listen(config.port,(err)=>{
    if(err)throw err;
    console.log("Server connected! ",config.port);
})
