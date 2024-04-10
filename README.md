# Aplicação de Clima Tempo

Esta aplicação permite que os usuários obtenham informações meteorológicas sobre uma determinada cidade.

## Funcionalidades

- Os usuários podem inserir o nome de uma cidade no campo de entrada.
- A aplicação consulta a api Open Wheather Map para obter os dados meteorológicos da cidade inserida.
- Os dados meteorológicos (temperatura, descrição do clima, umidade, velocidade do vento) são exibidos na página.

## Como Usar

1. Clone o repositório em seu ambiente local.
2. Crie um arquivo config.json e insira o códio da api Open Wheather seguindo esse modelo:
{
    "apikey": ""
}
3. rode o comando npm init
4. Instale as bibliotecas axios, express e cors
5. Certifique-se de ter o servidor local configurado e em execução na porta 3000.
6. Abra o arquivo `index.html` em seu navegador.
7. Inicie o sistema rodando o comando node app
8. Insira o nome da cidade desejada no campo de entrada.
9. Pressione Enter ou clique no botão de envio.
10. Aguarde a resposta do servidor e veja as informações meteorológicas exibidas na página.

## Requisitos

- Node.js (para executar um servidor local)

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Autor

Pedro Henrique Magalhães
