# backend/Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./

# Reinstall bcrypt cleanly inside the container
RUN npm install bcrypt && npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
