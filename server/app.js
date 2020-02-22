const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

let toDoItem = [
    {
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
    },
    {
        todoItemId: 1,
        name: 'another item',
        priority: 2,
        completed: false
    },
    {
        todoItemId: 2,
        name: 'a done item',
        priority: 1,
        completed: true
    }
];

app.get('/', (req, res) => {
    res.status(200).send({status: 'ok'});
    
});

app.get('/api/TodoItems', (req, res) => {
    res.status(200).json(toDoItem);
});

app.get('/api/TodoItems/:number', (req,res) => {
    for(let i = 0;i < toDoItem.length;i++) {
        if(toDoItem[i].todoItemId == req.params.number) {
            res.json(toDoItem[i]);
        }
    }
});
    
app.post('/api/TodoItems/', (req,res) => {
    res.status(201).json(req.body);
});

app.delete('/api/TodoItems/:number', (req,res) => {
    for(let i = 0; i < toDoItem.length; i++) {
        if(toDoItem[i].todoItemId == req.params.number) {
            res.json(toDoItem[i]);
        }
    }
})

module.exports = app;
