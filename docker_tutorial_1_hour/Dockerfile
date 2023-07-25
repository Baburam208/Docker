FROM node:20-buster

# Copy package.json, wildcard used so both backage.json AND package-lock.json are copied.
# slash '/' at the end of app is important, so it created an app directory, 
# otherwise you'll get an error.
COPY package*.json /app/

# Copy app files from src directory
COPY src /app/

# Create app directory & set default dir so that next commands executes in /app dir
WORKDIR /app

# Install app dependencies
RUN npm install 

# Start the application
CMD ["node", "server.js"]