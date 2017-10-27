const express = require('express')
const { MongoClient } = require('mongodb')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

MongoClient.connect('mongodb://localhost/library', (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const tooltips = db.collection('tooltips')

  app.get('/tips', (req, res) => {
    tooltips
      .find({})
      .toArray()
      .then(tips => {
        res.json(tips)
      })
      .catch(err => {
        console.error(err)
        res.sendStatus(500)
      })
  })
  app.listen(3000, () => console.log('Test at http://localhost:3000'))
})
