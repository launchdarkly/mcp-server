FROM node:24-bookworm-slim AS builder

WORKDIR /app

RUN npm install -g bun

COPY package*.json ./

RUN bun install 

COPY . .

RUN npm run build

FROM gcr.io/distroless/nodejs24-debian12:970bec506fed86941afb61c21983f25b3b3fe68c

WORKDIR /app

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/bin ./bin
COPY --from=builder /app/package.json ./

EXPOSE 8080
ENTRYPOINT ["/nodejs/bin/node", "/app/bin/mcp-server.js", "start", "--transport", "sse", "--port", "8080"]
