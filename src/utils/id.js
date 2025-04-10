const { v4: uuidv4 } = require('uuid'); //Menggunakan library uuid

//Fungsi membuat 
function generateId() {
  return uuidv4();
}

module.exports = generateId;
