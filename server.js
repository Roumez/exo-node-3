// import de express
const express = require('express')

// definition de notre app
const app = express()

// le port d'écoute de notre serveur
const IP_LOOPBACK = 'localhost'
const PORT = 3000

const add = async () => {
  try {
    app.get('/calc/add/:nb1/:nb2', (req, res) => {
      res.send(`Hello, voici la réponse à votre calcul ${nb1 + nb2} `)
      const jsObject = JSON.parse(add)
    })
  } catch (e) {
    console.log(e.message)
  }
}
add()

const sub = async () => {
  try {
    app.get('/calc/sub/:nb1/:nb2', (req, res) => {
      res.send(`Hello, voici la réponse à votre calcul ${nb1 - nb2} `)
    })
  } catch (e) {
    console.log(e.message)
  }
}
sub()

const mul = async () => {
  try {
    app.get('/calc/mul/:nb1/:nb2', (req, res) => {
      res.send(`Hello, voici la réponse à votre calcul ${nb1 * nb2} `)
    })
  } catch (e) {
    console.log(e.message)
  }
}
mul()

const div = async () => {
  try {
    app.get('/calc/div/:nb1/:nb2', (req, res) => {
      res.send(`Hello, voici la réponse à votre calcul ${nb1 / nb2} `)
    })
  } catch (e) {
    console.log(e.message)
  }
}
div()

const mod = async () => {
  try {
    app.get('/calc/mod/:nb1/:nb2', (req, res) => {
      res.send(`Hello, voici la réponse à votre calcul ${nb1 % nb2} `)
    })
  } catch (e) {
    console.log(e.message)
  }
}
mod()


// start the server
app.listen(PORT, IP_LOOPBACK, () => {
  console.log(`Example app listening at http://${IP_LOOPBACK}:${PORT}`)
})