// import de express
const express = require('express')

// definition de notre app
const app = express()

// le port d'écoute de notre serveur
const IP_LOOPBACK = 'localhost'
const PORT = 3000

app.get('/hello', (req, res) => {
  res.send('Hello Roumez')
})

// start the server
app.listen(PORT, IP_LOOPBACK, () => {
  console.log(`Example app listening at http://${IP_LOOPBACK}:${PORT}`)
})