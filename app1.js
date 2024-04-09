const {TulisPertanyaan,simpanContact} = require("./contact1")


const main = async() =>{
  const nama = await TulisPertanyaan('Masukan Nama Anda : ')
  const nim = await TulisPertanyaan('Masukan Nim Anda : ')
  
  simpanContact(nama,nim)
  
}

main()