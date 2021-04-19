FROM node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /home/mallarapuramya2/angular-app/Angularproject

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod
