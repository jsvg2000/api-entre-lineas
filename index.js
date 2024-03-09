const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {checkApiKey } = require('./middlewares/auth.handler');
require('./utils/auth');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

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
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port' +  port);
});

//Visualizando cambios
