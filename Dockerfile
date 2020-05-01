FROM node:12.16.3-alpine3.11

ENV PATH /usr/src/app/node_modules/.bin:$PATH

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./public ./public

COPY ./src ./src

CMD [ "npm", "start" ]