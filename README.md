# Conteúdo ministrado
## Disciplina Arquitetura da Tecnologia da Informação

## Aula 01
- Apresentação do conteúdo e disciplina;

## Aula 02
- Arquivos JSON, entendimento da estrutura e organização de itens.

## Aula 03
- Banco de dados não relacionais.

## Aula 04 
- Trabalhando com _MongoDB_

## Aula 05
- Comandos em _MongoDB_

## Aula 06
- Index01.js
Trabalhando com variáveis em _NodeJS_

- Index02.js
Funções

- Index03.js
_Arrow functions_

- Index04.js
Iniciando um servidor Web

- Index05.js
Recebendo requisições e tratando URL

**Para iniciar um novo prohjeto em Node, utilize o comando**
> npm init

**Após isso, execute o npm install para criar o arquivo package-lock.json**
> npm install

**Para executar o servidor, o comando é**
> node index.js

**Variáveis em JS**
> var (variáveis globais dentro do arquivo)
> let (variável "presa" ao contexto)
> const (variável que não pode ter seu valor alterado)


## Aula 07
- Index01.js
Enviando dados pelo _Postman_ para o servidor _NodeJS_

- Index02.js
Trabalhando com o _express_ no servidor NodeJS e recebendo informações através de _POST_

**Instalando o express**
> npm install --save express

## Aula 08 - 20/04/2021
- Recebendo requisições do cliente e enviando dados através de _JSON_
- *_produtos.json_ representa os dados exsitentes no banco

## Aula 08.02 - 20/04/2021
- Organizando a estrutura de arquivos
- Trabalhando com o conceito de rotas e controladores

## Aula 09 - 27/04/2021
- Trabalhando com _express.Router()_
- Simulando via _postman_ e servidor a validação de usuário e senha para login
- Conhecendo o conceito de _middleware_ para acesso a áreas restritas

## Aula 10 - 04/05/2021
- Criação de banco de dados em mongo na nuvem 
- Instalação do moongose para trabalhar com o banco de dados
> npm install --save mongoose

- Conexão no banco de dados criado
- Criação de um usuário
- Lista de usuários cadastrados
- Simulação de efetivação de login com consulta ao banco

## Aula 11 - 11/05/2021
- Separação do site em area restrita e login através de middleware
- Criação de token e adição de itens ao token com o jsonwebtoken
- Trabalhando com variáveis de ambiente usando o dotenv
> npm install --save dotenv jsonwebtoken

## Aula 12 - 18/05/2021
- Criação de conta no site heroku.com
- Criando a primeira aplicação
- Sequencia de comandos

- Dentro do terminal do VSCODE, se conectar com sua conta do heroku
> heroku login
- Iniciando repo git
> git init
- Interligando sua aplicação com o git do heroku
> heroku git:clone -a professor-artin
- Subindo aplicação para o heroku
> git add .

> git commit -m "Primeira deploy"

> git push heroku master

- Não esquecer de criar as variaveis globais (.ENV) no site do heroku

## Aula 13 - 25/05/2021
- Verificação e validação de Token no middleware
- Adição de mensagem de página não encontrada

## Aula 13 - 25/05/2021 - Trabalho
- Trabalho para ser entregue até o dia 01/06/2021

***Professor: Rodrigo Escobar***