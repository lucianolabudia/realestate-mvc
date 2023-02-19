// const express = require('express') // CommonJS
import express from 'express' // ES Modules
import userRoutes from './routes/userRoutes.js'
import db from './config/db.js'


// Crear la app
const app = express()

// Conexion a la base de datos
try {
    await db.authenticate();
    console.log('Conexion correcta a la base de datos')
} catch (error) {
    console.log(error)
}

// Habilitar Pug
app.set('view engine', 'pug')
app.set('views', './views')

// Carpeta Publica
app.use( express.static('public') )


// Routing
// use busca todas las rutas q inicien en una diagonal
// get es especifica
app.use('/auth', userRoutes) 


// Definir un puerto e iniciar el proyecto
const port = 3000;

app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
});