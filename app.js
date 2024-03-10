
const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const useGraphql = require('./graphql');
const {checkApiKey } = require('./middlewares/auth.handler');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');
require('./utils/auth');


const createApp= async()=>{
  const app = express();

  app.use(express.json());

  const whitelist = ['http://localhost:5173', 'https://myapp.co'];

  const options = {
    origin: (origin, callback) => {
      if (whitelist.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('no permitido'));
      }
    }
  }
  app.use(cors());

  app.get('/',checkApiKey,(req,res)=>{
    res.send('Hola mi server en express');
  })

  routerApi(app);
  await useGraphql(app);

  app.use(logErrors);
  app.use(ormErrorHandler);
  app.use(boomErrorHandler);
  app.use(errorHandler);

  return app;
}

module.exports = createApp;
