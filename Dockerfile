FROM node:14.17.0

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . ./

EXPOSE 3333

CMD ["npm", "run", "server:dev"]