const router = require('express').Router();
const { ToDoItem } = require('../../db/models');

const { Op } = require('sequelize');

// GET all items - COMPLETE/INCOMPLETE
router.get('/', async (req, res) => {
  const items = await ToDoItem.findAll();

  let itemsList = [];
  items.forEach(item => {
    itemsList.push(item.toJSON());
  });

  return res.json({
    Items: itemsList
  });
});

// GET all items - INCOMPLETE ONLY

// GET all items - COMPLETE ONLY

// GET item by id
router.get('/:itemId', async (req, res) => {
  const item = await ToDoItem.findOne({
    where: {id: req.params.itemId}
  })

  if (!item) {
    res.status(404).json({
      message: 'No item exists with that id.'
    })
  };

  const itemJSON = item.toJSON();

  res.json(itemJSON)
});

// POST new item
router.post('/', async (req, res) => {
  const { title, startTime, endTime, where, repeat, reminder, notes } = req.body;

  if (!title || !startTime || !endTime) {
    res.status(400).json({
      message: 'Validation Error',
      statusCode: 400,
      errors: {
        title: 'What is your To Do?',
        startTime: 'Please pick a start time',
        endTime: 'Please pick an end time'
      }
    })
  } else {
    const newItem = await ToDoItem.create({
      title,
      startTime,
      endTime,
      where,
      repeat,
      reminder,
      notes
    })
    res.status(201);
    return res.json(newItem);
  };
});

// PUT item by id
router.put('/:itemId', async (req, res) => {
  const item = await ToDoItem.findOne({
    where: {id: req.params.itemId}
  });

  if (!item) res.status(400).json({
    message: 'Item does not exist at given id.'
  })

  const { title,
          startTime,
          endTime,
          where,
          repeat,
          reminder,
          notes } = req.body;

  if (!title || !startTime || !endTime) {
    res.status(400).json({
      message: 'Validation Error',
      statusCode: 400,
      errors: {
        title: 'What is your To Do?',
        startTime: 'Please pick a start time',
        endTime: 'Please pick an end time'
      }
    })
  };

  item.update(req.body);
  res.json(item);
});

// DELETE item by id
router.delete('/:itemId', async (req, res) => {
  const item = await ToDoItem.findOne({
    where: {id: req.params.itemId}
  });

  if (item) {
    await item.destroy();
    res.status(201).json({
      message: 'Item deleted successfully!'
    })
  } else {
    res.status(400).json({
      message: 'No item exists at given id.'
    })
  }
});

module.exports = router;
