//routes/courses.js
const router = require('express').Router();
const debug = require('debug')('a2:CourseRouter')
const validateCourseId = require('../middleware/validateCourseId.js');
const Course = require('../models/Course.js');
const sanitizeBody = require('../middleware/sanitizeBody.js');

router.use('/:courseId', validateCourseId);

router.get('/', async (req,res) =>{
    //because find is asynchronous we must await the result
    //and make the whole function async
    const data = await Course.find();
    res.send({data}); //shortcut of data:data cause the title and value have the same label
});

router.post('/', sanitizeBody, async (req, res) =>{
    let newCourse = new Course(req.sanitizedBody);
    debug(req.sanitizedBody);
    await newCourse.save();

    res.status(201).send({data: newCourse});
});

module.exports = router; 