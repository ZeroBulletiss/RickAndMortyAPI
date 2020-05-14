const {Router} = require('express')

const MenuController = require('./controller/MenuController')

const router = Router() 

router.get('/', MenuController.get)


module.exports = router