import express from 'express'
import { PORT } from './config/config.js'
import { db } from './connection.js'

const app = express()

app.get('/', (req, res) => {
  res.send('servidor en linea')
})

db()

app.listen(PORT, () => {
  console.log('servidor activop en el puerto:', PORT)
})

// localhost:3000/inventario
