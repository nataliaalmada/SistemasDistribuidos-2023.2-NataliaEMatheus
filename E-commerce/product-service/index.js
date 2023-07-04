const express = require("express");
const app = express();
const PORT = process.env.PORT_ONE || 8080;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const amqp = require('amqplib');
const Product = require("./product");
const isAuthenticated = require("../isAuthenticated");

app.use(express.json())

var channel, connection;

// Conecta ao banco de dados usando async/await
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost/product-service', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexão Product-Service com o banco de dados estabelecida com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}
connectToDatabase();

async function connect() {
    const amqpServer = "amqp://localhost:5672";
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("PRODUCT");
}
connect();


app.post("/product/create", isAuthenticated, async (req, res) => {
    const { name, description, price } = req.body;
    const newProduct = new Product({
        name,
        description,
        price,
    });
    newProduct.save();
    return res.json(newProduct);
});

app.post("/product/buy", isAuthenticated, async (req, res) => {
    const { ids } = req.body;
    const products = await Product.find({ _id: { $in: ids } });
  
    const orders = []; // Array para armazenar as ordens recebidas
  
    // Função para processar cada mensagem recebida
    function processMessage(data) {
      const order = JSON.parse(data.content);
      orders.push(order);
  
      // Verifica se todas as mensagens foram recebidas
      if (orders.length === ids.length) {
        channel.ack(data); // Confirma o recebimento de todas as mensagens
        res.json(orders); // Envia a resposta com todas as ordens
      }
    }
  
    // Configura o consumo do canal
    channel.consume("PRODUCT", processMessage, { noAck: true });
  
    // Envia a mensagem para o canal AMQP
    channel.sendToQueue(
      "ORDER",
      Buffer.from(
        JSON.stringify({
          products,
          userEmail: req.user.email,
        })
      )
    );
  });
  
  

app.listen(PORT, () => {
    console.log(`Product-service na ${PORT}`);
});
