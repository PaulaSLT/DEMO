const { getUsers } = require('../controllers/user.controller')
const { checkAuth } = require('../middlewares/auth.middlewares')

const router = require('express').Router()

router.get('/', checkAuth,  getUsers)

module.exports = router