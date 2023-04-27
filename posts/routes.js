const routingsetup = (app) =>{
    const post = require('./api/routes/postroute');
    app.use('/',post);
}

module.exports={ routingsetup };