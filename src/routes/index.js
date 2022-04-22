const express = require('express');
const clinicRouter = require('./clinic.router');

function routerApi(app) {
  const router = express.Router();
  /* Endpoint estático: http://localhost:3000/api/v1 */
  app.use('/api/v1', router);
  /* Endpoint estático: http://localhost:3000/api/v1/people */
  router.use('/clinics', clinicRouter);
}

module.exports = routerApi;