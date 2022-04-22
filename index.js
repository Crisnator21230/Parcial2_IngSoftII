require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const port = 3000 || process.env.port;
const routerApi = require('./src/routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./src/handlers/errors.handler');
const app = express();

app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler);

app.get('/', (req, res) => {
  res.json({ message: 'Success' });
});

app.listen(port, () => {
  console.log(`Accede al sitio web dando click aquí: http://localhost:${port}`);
});

mongoose
  .connect(process.env.MONGODB_STRING_CONNECTION)
  .then(() => console.log('Success connection with mongo'))
  .catch((error) => console.error(error));

/* Respuestas a solicitudes http en formato JSON */
app.use(express.json());

/* Permitir hacer el llamado de los request */
routerApi(app);