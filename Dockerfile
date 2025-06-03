# Use official Node.js LTS image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application source
COPY . .

# Build TypeScript
RUN npm run build && npm prune --production

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "dist/index.js"]
