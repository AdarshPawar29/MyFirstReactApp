const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoListSchema = new Schema({
    id: {type: String, required: true, unique: true},
    title: {type: String, required: true},
    completed: {type: Boolean, required: true},   
},{
    timestamps: true,
});

const List = mongoose.model('todoList', todoListSchema);
module.exports = List;