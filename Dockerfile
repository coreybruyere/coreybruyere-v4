# Use the official Bun image as the base image
FROM oven/bun:1.1.44-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json, bun.lockb, and panda.config.ts files
COPY package.json bun.lockb panda.config.ts ./

# Install dependencies
RUN bun install

# Run the prepare script to generate CSS utilities
RUN bun run prepare

# Copy the rest of the application code
COPY . .

# Build the application
RUN bun run build

# Stage 2: Create a minimal runtime image
FROM oven/bun:1.1.44-alpine

# Install necessary runtime dependencies
RUN apk add --no-cache nodejs

# Set the working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app /app

# Expose the port the app runs on
EXPOSE 4321

# Start the application
CMD ["bun", "run", "build"]
