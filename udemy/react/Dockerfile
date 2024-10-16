FROM node:20-alpine

WORKDIR /app

COPY  package*.json .

RUN npm install

COPY . .

ENV API=http://api.com

EXPOSE 5173

CMD npm run dev
