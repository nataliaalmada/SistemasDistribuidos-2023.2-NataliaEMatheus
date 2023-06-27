const express = require('express');
const app = express();
const port = 3002;
const db = require('./db'); // Importa a conexão com o banco de dados
const mysql = require('mysql2');


app.use(express.json());

// Testa a conexão com o banco de dados
db.connect((error) => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } else {
    console.log('Conexão com o banco de dados estabelecida com sucesso');

    // Inicie o servidor após a conexão bem-sucedida
    app.listen(port, () => {
      console.log(`Serviço de produtos cadastrados rodando na porta ${port}`);
    });
  }
});

// Rota para listar todos os produtos
app.get('/products', (req, res) => {
  // Use a conexão com o banco de dados para executar uma consulta SQL
  db.query('SELECT * FROM produtos', (error, results) => {
    if (error) {
      console.error('Erro ao executar a consulta:', error);
      res.status(500).send('Erro ao obter os produtos');
    } else {
      res.json(results);
    }
  });
});

app.get('/test', (req, res) => {
  // Execute uma consulta SQL simples para testar a conexão
  db.query('SELECT * FROM produtos', (error, results) => {
    if (error) {
      console.error('Erro ao executar a consulta:', error);
      res.status(500).send('Erro ao executar a consulta');
    } else {
      res.json(results);
    }
  });
});


// Rota para cadastrar um novo produto
app.post('/products', (req, res) => {
  const { id, name, price } = req.body;

  // Use a conexão com o banco de dados para executar uma consulta SQL
  db.query('INSERT INTO produtos (id, name, price) VALUES (?, ?, ?)', [id, name, price], (error, results) => {
    if (error) {
      console.error('Erro ao cadastrar o produto:', error);
      res.status(500).send('Erro ao cadastrar o produto');
    } else {
      res.status(201).json({ id, name, price });
    }
  });
});

// Rota para atualizar informações de um produto
app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;



  // Use a conexão com o banco de dados para executar uma consulta SQL
  db.query('UPDATE produtos SET name = ?, price = ? WHERE id = ?', [name, price, id], (error, results) => {
    if (error) {
      console.error('Erro ao atualizar o produto:', error);
      res.status(500).send('Erro ao atualizar o produto');
    } else if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Produto não encontrado' });
    } else {
      res.json({ id, name, price });
    }
  });
});

app.post('/products', (req, res) => {
  const { id, name, price } = req.body;

  // Executar uma consulta SQL para inserir o novo produto no banco de dados
  db.query('INSERT INTO produtos (id, name, price) VALUES (?, ?, ?)', [id, name, price], (error, result) => {
    if (error) {
      console.error('Erro ao inserir o produto:', error);
      res.status(500).send('Erro ao cadastrar o produto');
    } else {
      res.status(201).json({ message: 'Produto cadastrado com sucesso' });
    }
  });
});


app.listen(port, () => {
  console.log(`Serviço de produtos cadastrados rodando na porta ${port}`);
});
