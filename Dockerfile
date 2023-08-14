FROM node:18.10.0-alpine AS blog

WORKDIR /app
COPY package*.json ./
RUN npm i -g nodemon
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]