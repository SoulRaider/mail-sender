FROM node

WORKDIR /usr/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

WORKDIR /usr/app/dist

EXPOSE 5000

CMD node src/server.js