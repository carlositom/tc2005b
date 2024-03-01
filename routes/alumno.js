const express = require('express')
const router = express.Router()
const {getAlumno, insertAlumno ,updateAlumno} = require('../controllers/alumno.controller')

router.get('/alumno', getAlumno)
router.put('/alumno', updateAlumno)
router.post('/alumno', insertAlumno)

module.exports = router