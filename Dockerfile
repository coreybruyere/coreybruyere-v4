# Use the official Bun image as the base image
FROM oven/bun:1.1.44-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json, bun.lockb, .env, and panda.config.ts files
COPY package.json bun.lockb .env panda.config.ts ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the application
RUN bun run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["bun", "run", "start"]
