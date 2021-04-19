FROM node:10-alpine as build-step

WORKDIR /home/mallarapuramya2/angular-app/Angularproject

COPY package.json

RUN npm install

RUN npm run build --prod
