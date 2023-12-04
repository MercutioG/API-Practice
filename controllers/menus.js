let {tasks} = require('../data')

//Get function for all tasks
const readMenu = (req, res) => {
  res.json({success: true, data: menu})
}

module.exports = {readMenu}