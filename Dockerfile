FROM node:12

# create app directory
WORKDIR /usr/src/app

#install app dependencies
COPY package*.json ./

# run dependencies
RUN npm install

# bundle app code
COPY . .

EXPOSE 8080

CMD [ "node", "handlers.js" ]