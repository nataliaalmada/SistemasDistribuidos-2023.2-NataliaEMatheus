const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

app.get('/login', (req, res) => {
  axios.get('http://localhost:3001/cart')
  .then(response => {
      console.log('Resposta do serviço de carrinho de compras:', response.data);
      // Manipular a resposta, se necessário
      
      res.send('Serviço de login');
    })
    .catch(error => {
      console.error('Erro ao fazer solicitação ao serviço de carrinho de compras:', error);
      // Lidar com o erro, se necessário
      
      res.status(500).send('Erro ao acessar o serviço de carrinho de compras');
    });
});

app.listen(port, () => {
  console.log(`Serviço de login rodando na porta ${port}`);
});

app.post('/cart/add', (req, res) => {
  // Extrair os dados do produto da requisição
  const { productId } = req.body;

  // Fazer uma requisição ao serviço de produtos para obter os detalhes do produto
  axios.get(`http://localhost:3002/products/${productId}`)
  .then(response => {
      // Obter os detalhes do produto da resposta
      const product = response.data;

      // Enviar uma resposta de sucesso
      res.send('Produto adicionado ao carrinho');
    })
    .catch(error => {
      console.error('Erro ao fazer solicitação ao serviço de produtos:', error);
      // Lidar com o erro, se necessário
      res.status(500).send('Erro ao acessar o serviço de produtos');
    });
});
