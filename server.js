

// import de express
const express = require('express')
// import de axios
const axios = require('axios')

// definition de notre app
const app = express()

// le port d'écoute de notre serveur
const PORT = 3333

const asyncTask = (id, timeout, willFulFilled) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willFulFilled === true) {
        // ce console.log simule un side effect
        console.log(`Log: task${id} done after ${timeout} seconds`)
        // la valeur de retour est contenu dans le resolve
        resolve(`result from task${id}`)
      } else {
        reject(new Error(`faillure from task${id}`))
      }
    }, timeout * 1000)
  })
}
// définition d'une route '/', la route par défaut.
// lorsqu'un client effectuera une requête sur ce endpoint
// on lui retournera le texte 'Hello World!' via la callback/
// Cette callback est aussi appellée 'handler function'
app.get('/', (req, res) => {
  res.send('Welcome to my first second express server')
})

app.get('/people/:peopleId', async (req, res) => {
  try {
    const id = req.params.peopleId
    const response = await axios.get(`https://swapi.dev/api/people/${id}`)
    res.send(response.data)
  } catch (e) {
    res.send(e.message)
  }
})

app.get('/starships/:starId', async (req, res) => {
  try {
    const id = req.params.starId
    const response = await axios.get(`https://swapi.dev/api/starships/${id}`)
    res.send(response.data)
  } catch (e) {
    res.send(e.message)
  }
})

app.get('/wiki/:word', async (req, res) => {
  try {
    const word = req.params.word
    const response = await axios.get(`https://en.wikipedia.org/wiki/${word}`)
    res.send(response.data)
  } catch (e) {
    res.send(e.message)
  }
})


app.get('/timebomb/:seconds', async (req, res) => {
  await asyncTask(1, req.params.seconds, true)
  res.send(`Boom after ${req.params.seconds}`)
})

app.get('/hello/:firstName', (req, res) => {
  res.send(`Hello ${req.params.firstName}`)
})


// démarrage de notre serveur sur le port 3333
app.listen(PORT, LOCAL_IP, () => {
  //exécution d'un affichage au lacement du serveur.
  console.log(`Example app listening at http://${LOCAL_IP}:${PORT}`)
})