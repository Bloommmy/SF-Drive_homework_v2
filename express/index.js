const express = require('express');

const { usersRouter } = require('./user-router')

const app = express();

app.set('port', 8080);


function loggerMiddleware(req, res, next) {
    console.log(`[${req.method}] - ${req.url}`);
    next();
}

function authMiddleware(req, res, next) {
    if (req.headers['authorization'] !== undefined) {
        next();
    } else {
        res.statusCode = 401;
        res.send('Error! You need to authorize');
    }
}

app.use(loggerMiddleware);

app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.statusCode = 428;
    res.setHeader('X-Custom-Header', 'skillfactory')
    res.send('I have received your GET request')
});

app.post('/', authMiddleware, (req, res) => {
    console.log(req.url);
    console.log(req.headers);
    res.send('I have received your POST request')
})

app.get('/users/:id', (req,res) => {
    const id = req.params.id;
    const sorting = req.query.sorting;
    res.send(`You have receid dsts on user #${id} with ${sorting} sorting`)
});

app.listen(app.get('port'), function() {
    console.log('Node App Started');
});