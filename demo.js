const axios = require('axios')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const main = async () => {
  try {
    const response = await axios.get('https://en.wikipedia.org/wiki/Fravia')
    const dom = new JSDOM(response.data)
    const titleTag = dom.window.document.querySelector('title')
    console.log(titleTag.textContent)
    const pTag = dom.window.document.querySelectorAll('p')
    console.log(pTag.length)
    const Links = dom.window.document.querySelectorAll('a')
    for (const link of Links) {
      console.log(link.href)
    }
  } catch (e) {
    console.log(e.message)
  }
}
main()