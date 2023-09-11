# Use an official Node.js runtime as the base image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend code into the container
COPY . .

# Build the frontend
RUN npm run build

# Use a lightweight Nginx image as the final image
FROM nginx:alpine

# Copy the built frontend from the build container to the Nginx web server
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
