FROM node:10-alpine as build-step

WORKDIR /home/mallarapuramya2/angular-app/Angularproject

RUN npm install

RUN npm run build --prod
