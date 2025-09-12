# 1. Builder
FROM node:20-slim AS builder
WORKDIR /app

# Copy the rest of the application code
COPY .next .next

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
# The server is started from the server.js file in the standalone output
CMD ["node", ".next/standalone/server.js"]

