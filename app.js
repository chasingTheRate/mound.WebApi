const express = require('express')
const app = express()

const nodeEnvTypes = require('./models/nodeEnvTypes');
const config = require('./config');
const routes = require('./routes');

if (process.env.NODE_ENV !== nodeEnvTypes.production) {
  require('dotenv').config();
}

const port = config.port;
app.use('/api', routes);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`The Mound is listening on port ${port}!`))