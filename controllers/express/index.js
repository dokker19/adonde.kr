const { Router } = require('express');
// const { route } = require('../../app');
const router = Router();
const ctrl = require('./express.ctrl');

router.get('/findAll', ctrl.get_all_terminals);
router.post('/findOne', ctrl.find_terminal);
router.put('/update', ctrl.update_terminal);
router.delete('/delete', ctrl.delete_terminal);
router.post('/create', ctrl.create_terminal);


module.exports = router;