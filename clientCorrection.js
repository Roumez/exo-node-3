// import axios
const axios = require('axios')
const { randomInt } = require('crypto') //utiliser le package pour generer des nombres aléatoires

//Fonction pour une requete
const request = async (opp, nb1, nb2) => {
  const response = await axios.get(`http://localhost:3333/calc/${opp}/${nb1}/${nb2}`)
  return response.data // retourne un objet json
}

const multipleRequest = async (nbRequete) => {
  let tab = ['mul', 'add', 'div', 'mod', 'sub']
  let tabPromise = []
  //execution des taches asynchrone dans la boucle
  for (let i = 0; i < nbRequete; ++i) {
    // Choix entre les 5 opérateurs tab, utiliser le randomInt generer avant
    let operateur = tab[randomInt(tab.length)]
    let nombre1 = randomInt(100)
    let nombre2 = randomInt(100)
    tabPromise.push(request(operateur, nombre1, nombre2))
  }
  // attente de la resolution de notre promise à l’exterieur de la boucle 
  //pour ne pas bloquer notre programme
  try {
    let result = await Promise.all(tabPromise)
    for (let elem of result) {
      console.log(elem)
    }
  } catch (e) {
    console.error(e.message)
  }
}
multipleRequest(100)
