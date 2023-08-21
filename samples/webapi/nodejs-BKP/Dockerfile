
FROM node:16
WORKDIR /usr/src/app
ENV http_proxy="http://10.9.5.140:8080"
ENV https_proxy="http://10.9.5.140:8080"
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "node", "src/app.js" ]
