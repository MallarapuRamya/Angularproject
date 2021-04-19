FROM node:10-alpine as build-step

WORKDIR /home/mallarapuramya2/angular-app/Angularproject

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

RUN ng s

EXPOSE 3000
