const router = require("express").Router();
const CelebrityModel = require('../models/Celebrity.model')




router.get('/celebrities/create', (req, res, next)=> {
    CelebrityModel.find()
    .then(()=>{
        res.render('celebrities/celebrities.hbs')
    })
    .catch((err)=>{
        next(err)
    })
})


router.post('/celebrities/create', (req, res, next) => {
    console.log( req.body )
    const {name, occupation, catchPhrase } = req.body
  
    CelebrityModel.create({name, occupation, catchPhrase})
          .then(() => {
            res.redirect('/celebrities')
        })
         .catch((err)=>{
            res.redirect('/celebrities/new-celebrity')
        })
})

router.get('/celebrities/create', (req, res, next)=> {
    CelebrityModel.find({name})
    .then((data)=>{
        res.render('celebrities/celebrities.hbs')
    })
    .catch((err)=>{
        next(err)
    })
})




module.exports = router;
