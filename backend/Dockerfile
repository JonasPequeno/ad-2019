FROM node:lts-alpine

ARG HOME_APP="/usr/src/ad-2019"

WORKDIR $HOME_APP

COPY package*.json ./

RUN npm install

COPY src/ ./src

EXPOSE 8080
CMD [ "start" ]