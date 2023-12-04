const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

router.use(bodyParser.json());
const {readMenu} = require('../controllers/menus')

router.get('/', readMenu)

module.exports = router