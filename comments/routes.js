const routingsetup = (app) =>{
    const comments = require('./api/routes/commentsroute');
    app.use('/',comments);
}

module.exports={ routingsetup };