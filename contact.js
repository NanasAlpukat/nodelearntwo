const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk')

const dirPath = './data'
if(!fs.existsSync(dirPath)){
  fs.mkdirSync(dirPath)
}

const dataPath = './data/contact.json'
if(!fs.existsSync(dataPath)){
  fs.writeFileSync(dataPath,'[]','utf-8')
}

const loadContact = ()=>{
  const file = fs.readFileSync('./data/contact.json','utf-8')
  const contacts = JSON.parse(file)
  return contacts
}

const simpanContact = (nama,nim,email) =>{
  const contact = {nama,nim,email}
  const contacts = loadContact()

// cek duplikat
  const duplikat = contacts.find((contact) => contact.nim === nim)
  if(duplikat){
    console.log(chalk.red.inverse.bold("Gunakan nim lain!!"))
    return false
  }
  // console.log(validator.isEmail(email))
  // Check Email
  // if(email){
    if(!validator.isEmail(email)){
      console.log(chalk.red.inverse.bold("Bukan email !!"))
        return false
    }
  // }

  contacts.push(contact)
  fs.writeFileSync('./data/contact.json',JSON.stringify(contacts))
  console.log(chalk.green.inverse.bold("terimakasih data telah di memasukan"))

  
}

const listContact = () =>{
  const contacts = loadContact()
  console.log(chalk.blue.inverse.bold("Daftar Contact Mahasiswa : "))

  contacts.forEach((contact, i) =>{
    console.log(`${i + 1}. ${contact.nama} - ${contact.nim} - ${contact.email}`)
  })
}

const detailContact = (nim) =>{
  const contacts = loadContact()
  const contact = contacts.find((contact) => contact.nim.toLowerCase() === nim.toLowerCase()
  );

  if(!contact){
    console.log(chalk.red.inverse.bold(`${nim} ini tidak ditemukan`))
    return false
  }
  console.log(chalk.blue.inverse.bold(contact.nim))
  console.log((contact.nama))
  console.log((contact.email))

  
}
const deleteContact = (nim) =>{
  const contacts = loadContact()
  const newContacts = contacts.filter((contact) => contact.nim.toLowerCase() !== nim.toLowerCase()
  );

  if(contacts.length === newContacts.length){
    console.log(chalk.red.inverse.bold(`${nim} ini tidak ditemukan`))
    return false
  }
  fs.writeFileSync('./data/contact.json',JSON.stringify(newContacts))
  console.log(chalk.green.inverse.bold(`data contact ${nim} telah dihapus`))
  
}

const editContact = (nim,nama,email) =>{
  const param = {nama,nim,email}
  const contacts = loadContact()
  const newContacts = contacts.filter((contact) => contact.nim.toLowerCase() !== nim.toLowerCase()
  );

  
  
  if(contacts.length === newContacts.length){
    console.log(chalk.red.inverse.bold(`${nim} ini tidak ditemukan`))
    return false
  }
  
  newContacts.push(param)
  fs.writeFileSync('./data/contact.json',JSON.stringify(newContacts))
  console.log(chalk.green.inverse.bold(`data contact ${nim} telah diubah`))
  
}
module.exports = {simpanContact,listContact,detailContact,deleteContact,editContact}
