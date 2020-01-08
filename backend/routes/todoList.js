const router = require('express').Router();
let List = require('../models/todoList.model');

router.route('/').get((req, res) => {
  List.find() 
    .then(lists => res.json({status: 200, data: lists})) 
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const completed = req.body.completed;

  const newTitle = new List({id, title, completed});

  newTitle.save((err, data) => {
    if(data)
      res.json({status: 200, message: 'Successfully added your task'})
    else
     res.json({status: 400, message: 'Error occurred while adding the task'})
  })
    // .then(() => res.json('Event added!'))
    // .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  List.findById(req.params.id)
    .then(lists => res.json(lists))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  List.findByIdAndDelete(req.params.id)
    .then(() => res.json({status: 200, message: 'Event deleted.'}))
    .catch(err => res.json({status: 400, message: 'Error occured'}));
});

router.route('/update/:id').post((req, res)=> {
  List.findById(req.params.id)
  .then(todoList => {
    todoList.id = req.body.id;
    todoList.title = req.body.title;
    todoList.completed = req.body.completed;

    todoList.save((err, data) => {
      if(data)
        res.json({status: 200, message: 'Successfully updated your task'})
      else
       res.json({status: 400, message: 'Error occurred while updating the task'})
    })
    // todoList.save()
    // .then(() => res.json('List updated!'))
    // .catch(err => res.status(400).json('Error: '+ err));
  })
  .catch(err => res.status(400).json('Error: '+ err));
})

module.exports = router; 