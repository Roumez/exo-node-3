const axios = require('axios')
const jsdom = require('jsdom')
const {JSDOM} = jsdom

const main() => {
const response = await axios.get('https://en.wikipedia.org/wiki/Fravia')
const dom = new JSDOM (response.data)
const titleTag = dom.window.document.querySelector('title')
console.log(titleTag.textContent)
}catch (e) {
  console.log(e.message)
}
main()

client.js lance plusieurs requete en parallele
web-info.js generer un fichier json via une url

```
extension pour gerer est <RESTer>

app.get('/calc/add/:op1/:op2', async(req, res) => {
  const op1 = req.params.op1
  const op2 = req.params.op2
  const result = {op : 'add', op1: op1, op2: op2, result: op1 + op2}
  // res.type('application/json')
  // res.send(JSON.stringify(result)) // => renvoi de l’objet
  res.json(result) //=> Pour recuperer du JSON
  //result est un objet javascript
})
```

jsDOM
