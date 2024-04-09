const fs = require('fs')
const readLine = require('readline')

const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout,
})

const dirPath = './data'
if(!fs.existsSync(dirPath)){
  fs.mkdirSync(dirPath)
}

const dataPath = './data/contact.json'
if(!fs.existsSync(dataPath)){
  fs.writeFileSync(dataPath,'[]','utf-8')
}


const TulisPertanyaan = (pertanyaan) =>{
  return new Promise((resolve,reject) =>{
    rl.question(pertanyaan, (data) =>{
      resolve(data)
    })
  })
}

const simpanContact = (nama,nim) =>{
  const contact = {nama,nim}
  const file = fs.readFileSync('./data/contact.json','utf-8')
  const contacts = JSON.parse(file)
  contacts.push(contact)
  fs.writeFileSync('./data/contact.json',JSON.stringify(contacts))
  console.log("terimakasih telah memasukan data")

  rl.close()
}

module.exports = {TulisPertanyaan,simpanContact}
