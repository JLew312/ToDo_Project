const router = require('express').Router();

router.get('/test', (req, res) => {
  res.json({
    message: 'hello world'
  })
});

module.exports = router;
