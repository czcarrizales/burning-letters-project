const express = require('express');
const app = express();

const router = express.Router();
const Letter = require('../models/letterModel')
app.use(express.urlencoded({extended: true}));
app.use(express.json());

router.route('/').get((req, res) => {
  Letter.find()
    .then(letter => res.json(letter))
    .catch(err => res.status(400).json('error: ' + err))
})

router.route('/letters/:_id').get((req, res) => {
  const id = req.params._id
  Letter.findById(id)
    .then(letter => res.json(letter))
    .catch(err => res.json('error: ' + err))
})

router.route('/create').post((req, res) => {
  const newLetter = new Letter({
    message: req.body.message
  })

  newLetter.save()
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      res.json({err: 'Letter creation error'})
    })
    console.log(req.body)
})

router.route('/delete/:_id').delete((req, res) => {
  const id = req.params._id
  Letter.findByIdAndDelete(id)
    .then(letter => res.json(letter))
    .catch(err => res.json('error ' + err))
})

module.exports = router;