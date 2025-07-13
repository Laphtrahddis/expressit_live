# Build Stage
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM nginx:alpine

# Copy build output to Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config to override default
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
