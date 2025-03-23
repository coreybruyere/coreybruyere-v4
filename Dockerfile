# Use the official Bun image as the base image
FROM oven/bun:1.1.44-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json, bun.lockb, and panda.config.ts files
COPY package.json .
RUN rm -rf node_modules package-lock.json

# Install dependencies
RUN bun install

# Run the prepare script to generate CSS utilities
RUN bun run prepare

# Copy the rest of the application code
COPY . .

# Build the application
RUN bun run build

# Bind to all interfaces
ENV HOST=0.0.0.0

# Port to listen on
ENV PORT=3000

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD node ./dist/server/entry.mjs
