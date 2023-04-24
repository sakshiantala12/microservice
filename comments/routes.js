const routingsetup = (app) =>{
    const comments = require('./api/routes/commentsroute');
    app.use('/comments/',comments);
}

module.exports={ routingsetup };