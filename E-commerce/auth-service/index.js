const express = require("express");
const app = express();
const PORT = process.env.PORT_ONE || 7070;
const mongoose = require("mongoose");
const User = require("./User");
const jwt = require("jsonwebtoken");
app.use(express.json())


// Conecta ao banco de dados usando async/await
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost/auth-service', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  // Verificar as credenciais
  if (email === "sistemas@distribuidos.com" && password === "1234") {
    // Credenciais válidas, criar o token JWT e retornar sucesso
    const payload = {
      email,
      name: "Nome do Usuário" // Você pode definir o nome do usuário aqui
    };
    jwt.sign(payload, "secret", (err, token) => {
      if (err) {
        console.log(err);
        return res.json({ message: "Erro ao criar o token" });
      } else {
        return res.json({ token: token });
      }
    });
  } else {
    // Credenciais inválidas, retornar mensagem de erro
    return res.json({ message: "Credenciais inválidas" });
  }
});


app.post("/auth/register", async (req, res) => {
  const { email, password, name } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
      return res.json({ message: "Usuario já existe " });
  } else {
      const newUser = new User({
          email,
          name,
          password,
      });
      newUser.save();
      return res.json(newUser);
  }
});

app.get("/", (req, res) => {
    res.send("Bem-vindo ao serviço de autenticação!");
  });
  
connectToDatabase();


app.listen(PORT,() => {
    console.log(`auth-service na ${PORT}`);
;
})