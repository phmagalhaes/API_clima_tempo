// Adiciona um evento de escuta para quando o formulário for submetido
document.getElementById("formClima").addEventListener("submit", function (event) {
  // Impede o comportamento padrão de submissão do formulário
  event.preventDefault();

  // Obtém o valor inserido no campo de entrada de cidade
  const city = document.getElementById("cityInput").value;

  // Formata a primeira letra da cidade para maiúscula
  const cidadeFormatada = city.charAt(0).toUpperCase() + city.slice(1);

  // Faz uma requisição fetch para o servidor local onde os dados do clima são obtidos
  fetch(`http://localhost:3000/climatempo/${city}`)
    // Converte a resposta para JSON
    .then((response) => response.json())
    // Manipula os dados obtidos
    .then((data) => {
      // Obtém o elemento onde o resultado do clima será exibido
      const tempoResult = document.getElementById("climaResult");

      // Define o estilo de exibição para block para tornar o resultado visível
      document.getElementById("climaResult").style.display = "block";

      // Verifica se os dados de temperatura estão presentes na resposta
      if (data.Temperatura) {
        // Se sim, exibe as informações do clima formatadas no elemento de resultado
        tempoResult.innerHTML = `
          <div class="clima-city-name">
            <i class="ph-fill ph-map-pin" id="pin_map"></i>
            <p id="cityResult">${cidadeFormatada}</p>
            <img src="${data.Flag}" class="flag-city">
          </div>
          <div class="clima-city-temp">
            <i class="ph ph-thermometer-simple"></i>
            <p id="tempResult">${data.Temperatura}ºC</p>
          </div>
          <div class="clima-city-icon">
            <p id="climaDescriptionResult">${data.Clima}</p>
            <img src="${data.Icone}">
          </div>
          <div class="clima-city-bot">
            <div class="clima-city-umidade">
              <i class="ph ph-drop"></i>
              <p id="umidadeResult">${data.Umidade}%</p>
            </div>
            <p class="espacamento">|</p>
            <div class="clima-city-vento">
              <i class="ph ph-wind"></i>
              <p id="ventoResult">${data.VelocidadeDoVento} m/s</p>
            </div>
          </div>
        `;
      } else {
        // Caso contrário, exibe uma mensagem de erro
        tempoResult.innerHTML = "Erro ao obter dados metereológicos!";
      }
    });
});
