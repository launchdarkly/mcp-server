FROM oven/bun:1-debian AS builder

WORKDIR /app

COPY package*.json ./

RUN bun install 

COPY . .

RUN bun run build

# Node.js 24.22.1 rejects chains through the compromised eMudhra intermediates
# (INC-289, nodejs/node#66871). The distroless nodejs24 images don't ship it yet.
FROM node:24.22.1-bookworm-slim@sha256:55fb5f5a527ea2c5c4a95f963e48ef90aa38c7b346054fdc8ee9957a2b55d205

WORKDIR /app

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/bin ./bin
COPY --from=builder /app/package.json ./

USER node

EXPOSE 8080
ENTRYPOINT ["node", "/app/bin/mcp-server.js", "start", "--transport", "sse", "--host", "0.0.0.0", "--port", "8080"]
