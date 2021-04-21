// import de express
const express = require('express')

//import calc
const { calc } = require('./calcCorrection')

// import asyncTask
const { asyncTask } = require('./asyncTask')

// definition de notre app
const app = express()

// le port d'écoute de notre serveur
const PORT = 3333

// définition d'une route '/', la route par défaut.
// lorsqu'un client effectuera une requête sur ce endpoint
// on lui retournera le texte 'Hello World!' via la callback/
app.get('/', (req, res) => {
  res.send(`Bienvenue ${req.ip}. Pour utiliser cette API :
  http://localhost:${PORT}/calc/opération/nombre1/nombre2
  Opération : add(+), sub(-), mul(*), div(/), mod(%)`)
})
app.get('/calc/:opp/:nb1/:nb2', async (req, res) => {
  // utiliser notre fonction asyncTask.js 
  await asyncTask(1, 5, true) // 1er parametre ID, 2e parametres le temps, 3e savoir si la tache est résolue ou non
  const opp = req.params.opp
  const nb1 = req.params.nb1
  const nb2 = req.params.nb2
  const result = await {
    opp,
    nb1,
    nb2,
    result: calc(opp, nb1, nb2)
  }
  if (result.result[0] === 'E') {
    res.status(400).send(result)
  } else {
    res.json(result)
  }
})

// démarrage de notre serveur sur le port 3000
app.listen(PORT, () => {
  //exécution d'un affichage au lacement du serveur.
  console.log(`Example app listening at http://localhost:${PORT}`)
})