FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Have port mapped by the docker daemon
EXPOSE 8080

# Defining command to run app
CMD [ "node", "server.js" ]
