let {menus} = require('../data')

//Get function for all menus
const readMenu = (req, res) => {
  res.json({success: true, data: menus})
}

module.exports = {readMenu}