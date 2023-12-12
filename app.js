const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 5000;

const menus = require('./routes/controller');

app.use(bodyParser.json())
// Static
app.use(express.static('./public'))
// Parse Data
app.use(express.urlencoded({ extended: false }))
// Parse JSON Data
app.use(express.json())
// Routers
app.use('/api/menus', menus)

const initServer = async () => {
  try {
    app.listen(port, () => {
      console.log('Listening on port ' + port)
    })
  } catch (error) {
    console.log(error)
  }
}

initServer()