const express = require('express') //cambiar require por input
const app = express()
const alumno = require('./routes/alumno')
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/', alumno)

//Callback function
app.listen(port, () => {
    console.log(`Conectado al puerto ${port}`)
})



