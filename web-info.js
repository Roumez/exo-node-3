// import axios
const axios = require('axios')
// import jsdom
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const fsPromises = require('fs/promises')

const USERS_FILE = 'info.json'

const addJson = async (titre, ur, img) => {
  try {
    const stat = await fsPromises.stat(USERS_FILE)
    if (stat.isFile()) {
      let jsonString = await fsPromises.readFile(USERS_FILE, 'utf-8')
      const users = JSON.parse(jsonString)
      jsonString = JSON.stringify(titre, ur, img)
      await fsPromises.writeFile(USERS_FILE, jsonString)
    }
  } catch (e) {
    if (e.code === 'ENOENT') {
      const emptyJsonString = '{}'
      await fsPromises.writeFile(USERS_FILE, emptyJsonString)
      await addJson(titre, ur, img)
    }
  }
}

const main = async () => {
  try {
    const response = await axios.get(process.argv[2])
    const dom = new JSDOM(response.data)
    const titleTag = dom.window.document.querySelector('title')
    console.log(titleTag.textContent)
    // const contentLength = dom.window.document.querySelectorAll()
    // console.log(contentLength)
    const nbUrl = dom.window.document.querySelectorAll('a')
    console.log(nbUrl.length)
    const nbImg = dom.window.document.querySelectorAll('img')
    console.log(nbImg.length)
    addJson(titleTag, nbUrl, nbImg)
  } catch (e) {
    console.log(e.message)
  }
}
main()
