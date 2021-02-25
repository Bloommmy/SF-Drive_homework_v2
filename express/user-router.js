const express = require('express');

const router = express.Router();

let users = [
    {
        name: 'John'
    },
    {
        name: 'Alex'
    },
    {
        name: 'Ivan'
    }
]

router.get('/', (req, res) => {
    res.send(users);
});

router.get('/:id', (req,res) => {
    const id = req.params.id;
    const sorting = req.query.sorting;
    res.send(`You have receid dsts on user #${id} with ${sorting} sorting`)
});

router.post('/', (req, res) => {
    users = users.concat(req.body);
    res.send(users);
});

module.exports = {
    usersRouter: router
};