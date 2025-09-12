# This Dockerfile is for packaging the pre-built application.
# The `npm run build` command is executed in cloudbuild.yaml, not here.

# 1. Runner Stage - The final, lean image
FROM node:20-slim AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV=production
# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the pre-built standalone output, which includes node_modules
COPY --from=builder /app/.next/standalone ./
# Copy the pre-built static assets
COPY --from=builder /app/.next/static ./.next/static
# Copy public assets
COPY --from=builder /app/public ./public

# Change ownership to the non-root user
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application from the standalone output
CMD ["node", "server.js"]

