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
          id: 'top-left',
          tip: 'Saves Data'
        },
        {
          id: 'top-right',
          tip: 'Erases Data'
        },
        {
          id: 'btm-left',
          tip: 'Edits Data'
        },
        {
          id: 'btm-right',
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
