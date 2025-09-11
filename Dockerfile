# Multi-stage build for Next.js application
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Accept build arguments
ARG MONGO_URI
ARG GEMINI_API_KEY
ARG BETTER_AUTH_SECRET
ARG BETTER_AUTH_URL
ARG STRIPE_SECRET
ARG STRIPE_WH_SECRET
ARG NEXT_PUBLIC_STRIPE_PK
ARG BREVO_API_KEY

# Set environment variables for build
ENV MONGO_URI=$MONGO_URI
ENV GEMINI_API_KEY=$GEMINI_API_KEY
ENV BETTER_AUTH_SECRET=$BETTER_AUTH_SECRET
ENV BETTER_AUTH_URL=$BETTER_AUTH_URL
ENV STRIPE_SECRET=$STRIPE_SECRET
ENV STRIPE_WH_SECRET=$STRIPE_WH_SECRET
ENV NEXT_PUBLIC_STRIPE_PK=$NEXT_PUBLIC_STRIPE_PK
ENV BREVO_API_KEY=$BREVO_API_KEY

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=deps /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=deps --chown=nextjs:nodejs /app/.next/ ./
# COPY --from=deps --chown=nextjs:nodejs /app/.next/static ./static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "./standalone/server.js"]
