const app = require('./src/app');

const port = process.env.APPPORT || 5000;

app.listen(port, () => {
  console.log('App running in port: ', port);
});