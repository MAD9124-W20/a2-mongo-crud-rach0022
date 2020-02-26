//middleware/validateCourseId.js

const Course = require('../models/Course.js'); //get a reference to the course model
const debug = require('debug')('a2:validateCourseId');

const validateCourseId = (req, res, next) => {
    const courseId = parseInt(req.params.courseId);
    const match = Course.findById(courseId, (err, data) =>{
        if(err){
            sendResourceNotFound(req, res);
        } else {
            console.log(data); //change to req.validatedId = data._id?
            next();
        }
    })
}

function sendResourceNotFound(req, res){
    res.status(404).send({
        errors: [
            {
                status: 'Not Found',
                code: '404',
                title: 'Resource does not exist',
                description: `We could not find a car with id: ${req.params.id}`
            }
        ]
    })
};

module.exports = validateCourseId;