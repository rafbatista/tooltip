const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost/library', (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const tooltips = db.collection('tooltips')
  tooltips
    .deleteMany({})
    .then(() => {
      tooltips.insertMany([
        {
          id: 'tl',
          tip: 'Saves Data'
        },
        {
          id: 'tr',
          tip: 'Erases Data'
        },
        {
          id: 'bl',
          tip: 'Edits Data'
        },
        {
          id: 'br',
          tip: 'Does Nothing'
        }
      ])
    })
    .catch(err => {
      console.error(err)
      process.exit(1)
    })
    .then(() => console.log('Tips are seeded!'))
    .then(() => db.close())
})
