module.exports = {
  port: process.env.PORT || 3000,
  databaseName: process.env.DATABASE_NAME,
  datebaseUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017'
}