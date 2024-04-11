# Utilização da API Open Weather Map

## Funcionalidade

A aplicação WeatherWise é uma interface web para consulta do clima de uma cidade. Ela permite que os usuários insiram o nome de uma cidade e obtenham informações sobre a temperatura, umidade, velocidade do vento e descrição do clima atual.

## Descrição dos recursos

- Consulta do clima de uma cidade
- Exibição de temperatura, umidade, velocidade do vento e descrição do clima atual
- Exibição de bandeira do país da cidade

## Casos de uso

1. O usuário acessa a aplicação WeatherWise em seu navegador web.
2. O usuário insere o nome de uma cidade no campo de entrada.
3. O usuário clica no botão "Consultar" para enviar a consulta.
4. A aplicação exibe as informações do clima da cidade consultada na tela.

## Fluxos de trabalho

1. Acessar a aplicação WeatherWise em um navegador web.
2. Inserir o nome de uma cidade no campo de entrada.
3. Clicar no botão "Consultar" para enviar a consulta.
4. Aguardar a resposta da API de clima.
5. Exibir as informações do clima da cidade consultada na tela.

## Requisitos do sistema

- Navegador web moderno (Chrome, Firefox, Safari, Edge)

## Arquitetura

### Componentes da aplicação

- Front-end: interface web desenvolvida em HTML, CSS e JavaScript, responsável pela exibição das informações do clima e pela interação com o usuário.
- Back-end: servidor web desenvolvido em Node.js e Express, responsável por receber as consultas do usuário e obter as informações do clima através da API OpenWeatherMap.

### Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- Node.js
- Express
- API OpenWeatherMap

### Estrutura do banco de dados

Não há banco de dados embutido nesta aplicação. As informações do clima são obtidas em tempo real através da API OpenWeatherMap.

## Desenvolvimento

### Processo de desenvolvimento

O processo de desenvolvimento da aplicação WeatherWise consistiu em:

1. Planejamento da interface e das funcionalidades da aplicação.
2. Desenvolvimento do front-end utilizando HTML, CSS e JavaScript.
3. Desenvolvimento do back-end utilizando Node.js e Express.
4. Integração do front-end com o back-end.
5. Testes e depuração da aplicação.

### Padrões de codificação

Os padrões de codificação utilizados na aplicação seguem as boas práticas de desenvolvimento web, incluindo:

- Separação de preocupações (HTML, CSS e JavaScript em arquivos separados).
- Utilização de nomenclatura consistente e descritiva.
- Comentários no código para facilitar a manutenção e a compreensão.

### Testes

Foram realizados testes manuais de funcionalidade e usabilidade da aplicação.

## Implantação

### Processo de implantação

Link para a API:https://openweathermap.org/api
- Faça login no site e anote sua API KEY

Para implantar a aplicação WeatherWise, é necessário:

1. Clone o repositório em seu ambiente local.
2. Crie um arquivo config.json e insira o códio da api Open Wheather seguindo esse modelo:
{
    "apikey": ""
}
3. rode o comando npm init
4. Instale as bibliotecas axios, express e cors
5. Certifique-se de ter o servidor local configurado e em execução na porta 3000.
6. Abra o arquivo index.html em seu navegador.
7. Inicie o sistema rodando o comando node app
8. Insira o nome da cidade desejada no campo de entrada.
9. Pressione Enter ou clique no botão de envio.
10. Aguarde a resposta do servidor e veja as informações meteorológicas exibidas na página.

### Requisitos de infraestrutura

Node.js (para executar um servidor local)

## Todos os comandos do código estão descritos no mesmo
