const routingsetup = (app) =>{
    const post = require('./api/routes/postroute');
    app.use('/post/',post);
}

module.exports={ routingsetup };