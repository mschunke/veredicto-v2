# Multi-stage Dockerfile for Next.js (standalone output) on Cloud Run

# 1) Builder: install deps and build with env available
FROM node:20-slim AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build-time arguments for envs used by Next during build
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_STRIPE_PK
ARG GEMINI_API_KEY
ARG MONGO_URI
ARG STRIPE_SECRET
ARG STRIPE_WH_SECRET
ARG BREVO_API_KEY
ARG BETTER_AUTH_SECRET
ARG BETTER_AUTH_URL

# Make them available to the build (Next.js inlines NEXT_PUBLIC_* on client)
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL \
	NEXT_PUBLIC_STRIPE_PK=$NEXT_PUBLIC_STRIPE_PK \
	GEMINI_API_KEY=$GEMINI_API_KEY \
	MONGO_URI=$MONGO_URI \
	STRIPE_SECRET=$STRIPE_SECRET \
	STRIPE_WH_SECRET=$STRIPE_WH_SECRET \
	BREVO_API_KEY=$BREVO_API_KEY \
	BETTER_AUTH_SECRET=$BETTER_AUTH_SECRET \
	BETTER_AUTH_URL=$BETTER_AUTH_URL

# Build Next.js (standalone output is configured in next.config.ts)
RUN npm run build

# 2) Runner: copy minimal artifacts
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy public assets and standalone server output
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Cloud Run sets PORT; Next.js listens to it automatically
EXPOSE 3000

CMD ["node", "server.js"]

