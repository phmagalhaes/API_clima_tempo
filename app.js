// Importação dos módulos necessários
const express = require("express");
const axios = require("axios");
const path = require("path");
const cors = require("cors");
const config = require("./config.json");
const apikey = config.apikey; // Chave de API

// Inicialização do servidor Express
const app = express();
app.listen(3000); // Servidor escutando na porta 3000

// Middleware para permitir requisições de diferentes origens (CORS)
app.use(cors());

// Middleware para interpretar corpos de requisição no formato JSON
app.use(express.json());

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rota para obter dados meteorológicos de uma cidade específica
app.get("/climatempo/:cidade", async (req, res) => {
  const city = req.params.cidade; // Obtém o nome da cidade a partir dos parâmetros da URL

  try {
    // Requisição para a API de previsão do tempo
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${apikey}&units=metric`
    );

    // Se a requisição foi bem-sucedida
    if (response.status === 200) {
      // Extrai os dados relevantes da resposta da API
      const clima = response.data.weather[0].description;
      const climaFormatado = clima.charAt(0).toUpperCase() + clima.slice(1);
      const icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
      const flag = `https://flagsapi.com/${response.data.sys.country}/flat/64.png`;

      // Formata os dados meteorológicos a serem enviados como resposta
      const watherData = {
        Temperatura: response.data.main.temp_min,
        Umidade: response.data.main.humidity,
        VelocidadeDoVento: response.data.wind.speed,
        Clima: climaFormatado,
        Icone: icon,
        Flag: flag,
      };

      // Envia os dados formatados como resposta
      res.send(watherData);
    } else {
      // Se a requisição não foi bem-sucedida, envia uma mensagem de erro
      res
        .status(response.status)
        .send({ erro: "Erro ao obter dados meteorológicos" });
    }
  } catch (error) {
    // Se ocorrer um erro durante a requisição, envia uma mensagem de erro
    res.status(500).send({ erro: "Erro ao obter dados meteorológicos", error });
  }
});
