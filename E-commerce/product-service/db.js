const mysql = require('mysql2');

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost', // Ou o endereço IP do seu contêiner MySQL
  user: 'root',
  password: 'senha', // A senha definida ao criar o contêiner MySQL
  database: 'mysql-sistemasdis' // O nome do banco de dados que você deseja usar
});

module.exports = connection;
