FROM node:20.12.1
WORKDIR /app
COPY package.json  .
RUN npm install
COPY . .
EXPOSE 3002
CMD node index.js