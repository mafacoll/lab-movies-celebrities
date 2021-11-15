const router = require("express").Router();

router.get('/movies/create', (req, res, next) => {
    console.log( req.body )
    const {title, genre, plot, cast } = req.body
  
    MoviesModel.create({title, genre, plot, cast })
          .then((allMovies) => {
            res.redirect('/movies')
        })
         .catch((err)=>{
            res.redirect('/movies/new-movies')
        })
})

router.post('/movies/create', (req, res, next)=> {
    .then((data)=>{
        req.body('/movies/create')
    })
    .catch((err)=>{
        next(err)
    })
})

module.exports = router;
