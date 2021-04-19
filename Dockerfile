FROM node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

RUN npm install

COPY package.json /app

COPY . /app

RUN npm run build --prod
