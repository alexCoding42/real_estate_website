# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend code into the container
COPY . .

# Expose the port that your Node.js application listens on (e.g., 3000)
EXPOSE 8000

# Start the Node.js application
CMD ["npm", "start"]
