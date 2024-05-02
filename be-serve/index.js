const express = require('express')
const mongosse = require('mongoose')
const cors = require('cors')
const TodoModel = require('/Models/Todo')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongod://127.0.0.1:27017')

app.get('/get', (req, res) => {
    TodoModel.find( )
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const {id} = res.params;
    TodoModel.findByIdAndDelete({id:_id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        tast: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running")
} )


