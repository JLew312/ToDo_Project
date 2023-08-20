const router = require('express').Router();

const toDoItemsRouter = require('./todoitems.js');

router.use('/todo-items', toDoItemsRouter);

// router.get('/test', (req, res) => {
//   res.json({
//     message: 'hello world'
//   })
// });

module.exports = router;
