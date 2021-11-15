const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/celebrities', (req, res, next) => {
  
})

router.get('/movies', (req, res, next) => {
  
})

module.exports = router;
