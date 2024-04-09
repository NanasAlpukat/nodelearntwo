const yargs = require('yargs')
const { simpanContact, listContact, detailContact, deleteContact, editContact } = require('./contact')

yargs.command({
  command : 'add',
  describe : 'Menambahkan Contact',
  builder: {
    nama: {
      describe : 'Nama Lengkap',
      demandOption : true,
      type : 'string',
    },
    nim: {
      describe : 'Nim Mahasiswa',
      demandOption : true,
      type : 'string',
    },
    email: {
      describe : 'Alamat Email',
      demandOption : false,
      type : 'string',
    },
  },

  
  handler(argv){
    simpanContact(argv.nama,argv.nim,argv.email)
    // const contact = {
    //   nama : argv.nama,
    //   nim : argv.nim,
    // } 
    // console.log(contact)
  }
}).demandCommand()

// menampilkan semua nama contact
yargs.command({
  command : 'list',
  describe : 'Menampilkan semua Contact',
  handler(){
    listContact()
  }
})

// menampilkan detail
yargs.command({
  command : 'detail',
  describe : 'Menampilkan dtail berdasarkan nim',
  builder : {
    nim: {
      describe : 'Nim Mahasiswa',
      demandOption : true,
      type : 'string',
    },
  },
  handler(argv){
    detailContact(argv.nim)
  }
})
// menampilkan delete
yargs.command({
  command : 'delete',
  describe : 'Menampilkan dtail berdasarkan nim',
  builder : {
    nim: {
      describe : 'Nim Mahasiswa',
      demandOption : true,
      type : 'string',
    },
  },
  handler(argv){
    deleteContact(argv.nim)
  }
})
yargs.command({
  command : 'edit',
  describe : 'Edit contact berdasarkan nim',
  builder : {
    nama: {
      describe : 'Nama Lengkap',
      demandOption : true,
      type : 'string',
    },
    nim: {
      describe : 'Nim Mahasiswa',
      demandOption : true,
      type : 'string',
    },
    email: {
      describe : 'Alamat Email',
      demandOption : false,
      type : 'string',
    },
  },
  handler(argv){
    editContact(argv.nim,argv.nama,argv.email)
  }
})

yargs.parse()