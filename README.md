# Teste - API CPF

O objetivo desta API é automatizar o controle de CPF da empresa.

Os requisitos funcionais da API são:

    Adicionar CPF na lista;
    Verificar se um determinado CPF está na lista;
    Remover um CPF da lista;
    Listar todos os CPF;

## Tecnologias utilizadas

Neste projeto foram utilizadas as seguintes tecnologias:

    Node Js
    Express
    Typescript
    Postgres
    Docker
    Git

Não foi utulizado ORM nesta API.

## Inicializando a API

A API foi desenvolvida utilizando containeres Docker para garantir que tudo irá funcionar bem em todos os ambientes.

Há dois containeres na API:

O container da API em si, e o container do Banco de Dados (Postgres).

## Para iniciar a API basta rodar o seguinte comando:

    docker-compose up -d

### Parar a aplicação e destruir os containeres:

    docker-compose down

## Caso a aplicação não funcione na primeira vez que subir containeres, reinicie eles para que as tabelas sejam criadas corretamente no banco de dados.

## Rotas da API

Get:

    http://localhost:3000/cpf
    Lista todos os CPF existentes na base de dados.

Get:

    http://localhost:3000/cpf/{cpf}
    Lista o CPF especificado.

Post:

    http://localhost:3000/cpf
    Adiciona um novo CPF.

    Parametro aceito:
    "cpf": "64852893055"

Delete:

    http://localhost:3000/cpf/{cpf}
    Remove o CPF especificado da base de dados.

## Sobre a API

### A API uiliza o RESTfull e o formato JSON.

Desenvolvi esta API utilizando o paradigma de POO, conceitos SOLID, Clean Code e Clean Architecture.

Escolhi seguir a estrutura do projeto na seguinte forma:

Uma pastas "server" para ficar todos os codigos.

E as seguintes camadas:

    Controller - Responsável por tratas a camada de comunicação com o mundo exterior.

    Database - Responsável pelas configurações do banco de dados e criação das tabelas necessárias.

    Entities - Camada que contém uma abstração do banco de dados para ser usada pela camada de UseCase.

    Repositories - Responsável pelos comandos de execução do banco de dados.

    UseCase - Camada onde é aplicada as regras de negócios.

No arquivo "app.ts" tem uma função com uma chamada para o arquivo "Tables.ts" para a criação das tabelas no banco de dados que são necessárias para o projeto, para facilitar a criação das mesmas.

Decidi colocar a função de "verificar se o CPF é válido" em um arquivo separado, por ser uma função um pouco mais complexa e grande, comparada às outras, assim manteria os arquivos bem objetivos e de uma forma que não ficasse tudo acoplado em apenas um arquivo.

Optei por utilizar o Express pela simplicidade que ele trás, assim poderia aplicar a estrutura que julguei melhor para a aplicação, e pensando também na facilidade para melhorias futuras e fácil manutenção.

Escolhi não utilizar um ORM pela simplicidade do projeto, e também para não ficar dependente apenas de um ORM. Embora seja possível adicionar um ao projeto sem dificuldades devido aos principios SOLID aplicados.

## Segui todos os conceitos que estavam descritos nos requisitos da API e todas as funcionalidades foram implementadas.