const pool = require('../helpers/mysql-config')

const getAlumno = (req,res) => {
    const sql ="SELECT * FROM alumno"

    pool.query(sql, (err, results, fields) => { 
        if (err)
            res.json(err)
        res.json(results)
    })
}

const insertAlumno = (req, res) => {
    const {nombre, paterno, materno, nacimiento} = req.body
    const sql = "INSERT INTO alumno(nombre,paterno,materno,nacimiento) VALUES(?,?,?,?)"

    pool.query(sql, [nombre, paterno, materno, nacimiento], (err, results, fields) => {
        if (err)
            res.json(err)
        res.json(results)
    })  
}

const updateAlumno = (req,res) => {
    const {nombre, paterno, materno, nacimiento,id} = req.body

    const sql = "UPDATE alumno SET nombre=?, paterno=?, materno=?, nacimiento=? WHERE id=?"

    pool.query(sql, [nombre, paterno, materno, nacimiento, id], (err, results, fields) => {
        if (err)
            res.json(err)
        if(results.affectedRows > 0)
            res.json({mensaje: "Registro actualizado"})
        res.json({mensaje: "Algo paso!"})
    }) 
}

module.exports = {getAlumno, insertAlumno, updateAlumno}