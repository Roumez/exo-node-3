// import axios
const axios = require('axios')
// import jsdom
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const fsPromises = require('fs/promises')
const { json } = require('express')

// gestion des erreurs avant lancement de notre programme
if (process.argv.length !== 3) {
  console.log('Utilisation : node web-info.js votre-URL')
  process.exit(1)
} else if (!process.argv[2].startsWith('http://') && !process.argv[2].startsWith('https://')) {
  console.log(`L'adresse URL ("${process.argv[2]}") doit commencer par http:// ou https:// `)
  process.exit(1)
}

const webInfo = async (url) => {
  try {
    const response = await axios.get(url)
    const dom = new JSDOM(response.data) // new JSDOM Renvoi un objet (recuperer HTML d’une page et d’autres infos)
    // Recuperer le titre 
    let title = dom.window.document.querySelector('title').textContent
    // Recuperer les urls
    let urls = dom.window.document.querySelectorAll('a')
    // Recuperer les images
    let imgs = dom.window.document.querySelectorAll('img').length
    // Recuperer la longueur en lettre de notre html
    let contentLength = response.headers['content-length']
    // Chercher les langages dans notre document  
    let language = []
    // boucler sur les urls 
    for (let elem of urls) {
      // interlanguage-link-target => className sur wikipedia pour récuperer les langues
      if (elem.className === 'interlanguage-link-target') {
        // push les titles de nos langues dans notre tableau language
        language.push(elem.title)
      }
    }
    // Mettre sous forme d’objet nos informations récuperés précedemment
    const info = {
      url,
      contentLength,
      title,
      nbUrls: urls.length,
      nbImg: imgs,
      language
    }
    // Ecrire notre objet sous format JSON
    // 1er parametre dans quel fichier on va écrire, 2e parametres transformer un objet en JSON
    await fsPromises.writeFile(`${title}.json`, JSON.stringify(info))
    // Gestion des erreurs à l’interieur de notre programme
  } catch (e) {
    console.log(e.message)
  }
}
webInfo(process.argv[2]);