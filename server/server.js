require("babel-register");
const express = require('express');
const bodyParser = require('body-parser');

const Controller = require('./api/controllers/controller');
const loki = require('lokijs');
const app = express();

app.set('port', (process.env.PORT || 3001));
app.use(bodyParser.json());

var db = new loki('data.json', {autosave: true, autoload: true, throttledSaves: true});

const adddRoute = (app, controller) => {
  app.route(`/api/${controller.collection}`)
    .get(controller.get_all)

  app.route(`/api/${controller.collection}/:id`)
    .get(controller.get)
};

adddRoute(app, Controller.bind(db, 'books'));

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});



