const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
const config = require('./config.json');
const apikey = config.apikey;

const app = express();
app.listen(3000);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const traducaoClima = {
    "few clouds": "Poucas nuvens",
    "scattered clouds": "Nuvens dispersas",
    "overcast clouds": "Nublado",
    "shower rain": "Chuva rápida",
    "broken clouds": "Sem nuvens",
    "light intensity drizzle": "Chuva suave",
    "clear sky": "Céu limpo",
    "mist": "Névoa",
    "haze": "Neblina",
    "fog": "Nevoeiro",
    "light rain": "Chuva leve",
    "moderate rain": "Chuva Moderada",
    "heavy rain": "Chuva intensa",
    "light snow": "Neve fraca",
    "moderate snow": "Neve moderada",
    "heavy snow": "Neve intensa",
    "thunderstorm": "Tempestade com trovões",
    "drizzle": "Chuvisco",
    "freezing rain": "Chuva congelante",
    "tornado": "Tornado"
}

app.get('/climatempo/:cidade', async (req, res)=>{
    const city = req.params.cidade;

    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
        if(response.status === 200){
            const clima = traducaoClima[response.data.weather[0].description] || response.data.weather[0].description;

            const watherData = {
                Temperatura: response.data.main.temp + "ºC",
                Umidade: response.data.main.humidity + "%",
                VelocidadeDoVento: response.data.wind.speed + "m/s",
                Clima: clima
            }

            res.send(watherData);
        } else{
            res.status(response.status).send({erro: 'Erro ao obter dados metereológicos'})
        }
    } catch(error){
        res.status(500).send({erro: 'Erro ao obter dados metereológicos', error});
    }
})