# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory to the root of your project
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Start the Node.js application
CMD ["node", "index.js"]