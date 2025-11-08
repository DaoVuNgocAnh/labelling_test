# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài dependency
RUN npm install

# Copy toàn bộ source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose port backend (lấy từ env BACKEND_PORT trong docker-compose)
EXPOSE 8080

# Start backend
CMD ["npm", "run", "start"]
