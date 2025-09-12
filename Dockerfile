# 1. Builder
FROM node:20-slim AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Set NEXT_TELEMETRY_DISABLED to 1 to disable telemetry during build
ENV NEXT_TELEMETRY_DISABLED 1

# Build the Next.js application
RUN npm run build

# 2. Runner
FROM node:20-slim AS runner
WORKDIR /app

# Set NEXT_TELEMETRY_DISABLED to 1 to disable telemetry in production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Copy the standalone server and public assets
COPY --from=builder /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
# The server is started from the server.js file in the standalone output
CMD ["node", "server.js"]

