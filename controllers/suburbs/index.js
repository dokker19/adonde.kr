const { Router } = require('express');
// const { route } = require('../../app');
const router = Router();
const ctrl = require('./suburbs.ctrl');

router.get('/findAll', ctrl.get_all_terminals);
router.get('/findOne', ctrl.find_terminal);
router.post('/create', ctrl.create_terminal);
router.put('/update', ctrl.update_terminal);
router.delete('/delete', ctrl.delete_terminal);

module.exports = router;

