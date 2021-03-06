const express = require('express')
const nodeEnvTypes = require('./models/nodeEnvTypes');

if (process.env.NODE_ENV !== nodeEnvTypes.production) {
  require('dotenv').config();
}

const config = require('./config');
const routes = require('./routes');

const app = express()


const port = config.port;
app.use('/api', routes);

app.get('/', (req, res) => res.send('Welcome to the Mound API'))

app.listen(port, () => console.log(`The Mound is listening on port ${port}!`))