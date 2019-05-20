module.exports = {
  port: process.env.PORT || 3000,
  databaseName: process.env.DATABASE_NAME || 'mlb',
  datebaseUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017'
}