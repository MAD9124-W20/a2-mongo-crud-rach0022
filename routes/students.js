//routes/students.js
const router = require('express').Router();
const debug = require('debug')('a2:StudentRouter');
const validateStudentId = require('../middleware/validateStudentId.js');
const Student = require('../models/Student.js');

router.use(':id', validateStudentId);

router.get('/', async (req, res) =>{});
router.post('/', async (req, res) =>{});
router.get('/:id', async (req, res) =>{});
router.patch('/:id', async (req, res) =>{});
router.put('/:id', async (req, res) =>{});
router.delete('/:id', async (req, res) =>{});

module.exports = router; 