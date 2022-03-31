require('dotenv').config()
const { Seeder } = require('mongo-seeding')
const path = require('path')

const config = {
  database: process.env.DB_CONNECTION,
  dropDatabase: false
}

const seeder = new Seeder(config)

const collections = seeder.readCollectionsFromPath(collectionsPath)

const seedDB = async () => {
  try {
    await seeder.import(collections)
    console.log('\n\n Database seeded successfully!')
    process.exit(0)
  } catch (err) {
    console.log(err)
    console.log('Error while seeding database')
    process.exit(1)
  }
}

seedDB()
