var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController')

/* GET users listing. */
router.get('/:marca', userController.getOne);
router.get('/', userController.getAll);

router.post('/',userController.register);
router.put('/:marca', userController.update);
router.delete('/:marca',userController.delete);

module.exports = router;