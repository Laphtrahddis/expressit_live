FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY .env .env

ENV PORT=5000
EXPOSE 5000

CMD ["node", "index.js"]
