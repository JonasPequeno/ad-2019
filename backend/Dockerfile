FROM node:lts-alpine

COPY package*.json ./

RUN npm install

COPY src/ ./src

EXPOSE 8080
CMD [ "start" ]
