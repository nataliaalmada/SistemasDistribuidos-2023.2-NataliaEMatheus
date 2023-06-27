const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');

// Array para armazenar os produtos no carrinho
const cartItems = [];

app.use(express.json());

app.get('/cart', (req, res) => {
  res.send('Serviço de carrinho de compras');
});

app.listen(port, () => {
  console.log(`Serviço de carrinho de compras rodando na porta ${port}`);
});

app.post('/cart/add', (req, res) => {
  const { productId } = req.body;

  // Verificar se o campo productId foi fornecido
  if (!productId) {
    res.status(400).send('productId não foi fornecido');
    return;
  }

  // Fazer uma requisição ao serviço de produtos para obter os detalhes do produto
  axios.get(`http://localhost:3002/products/${productId}`)
    .then(response => {
      // Obter os detalhes do produto da resposta
      const product = response.data;

      // Adicionar o produto ao carrinho
      cartItems.push(product);

      // Enviar uma resposta de sucesso
      res.send('Produto adicionado ao carrinho');
    })
    .catch(error => {
      console.error('Erro ao fazer solicitação ao serviço de produtos:', error);
      // Lidar com o erro, se necessário
      res.status(500).send('Erro ao acessar o serviço de produtos');
    });
});

app.get('/cart/items', (req, res) => {
  if (cartItems.length === 0) {
    res.status(404).send('Carrinho de compras vazio');
    return;
  }

  res.json(cartItems);
});
