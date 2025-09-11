# Multi-stage build for Cloud Functions
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source code and build the TypeScript code
COPY . .
RUN npm run build

# Production image, copy all the files and run the function
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 functions

# Copy the built application
COPY --from=deps --chown=functions:nodejs /app/dist ./dist
COPY --from=deps --chown=functions:nodejs /app/node_modules ./node_modules
COPY --from=deps --chown=functions:nodejs /app/package.json ./package.json

USER functions

EXPOSE 8080

ENV PORT 8080

CMD ["npm", "start"]
