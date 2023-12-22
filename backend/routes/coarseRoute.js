const express = require('express');
const router = express.Router();
const coarseController = require('../controllers/CoarseController');

router.get('/', coarseController.getAllCoarse);
router.get('/getCoarse/:id', coarseController.getCoarseById);
router.put('/updateCoarse/:id', coarseController.updateCoarseById);
router.delete('/deleteCoarse/:id', coarseController.deleteCoarseById);
router.post('/createCoarse', coarseController.createCoarse);

module.exports = router;