# Use official Node.js LTS image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy application source
COPY . .

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "index.js"]
