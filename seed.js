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
          id: 1,
          tip: 'Saves Data'
        },
        {
          id: 2,
          tip: 'Erases Data'
        },
        {
          id: 3,
          tip: 'Edits Data'
        },
        {
          id: 4,
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
