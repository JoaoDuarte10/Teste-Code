FROM node:alpine

WORKDIR /usr/api-cpf

COPY package*.json ./

RUN npm install

COPY . .
