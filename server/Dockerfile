# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . . 

# Expose the port the app runs on
EXPOSE 5000

# Start server
CMD ["npm", "run", "dev"]