FROM oven/bun:1-debian AS builder

WORKDIR /app

COPY package*.json ./

RUN bun install 

COPY . .

RUN bun run build

FROM gcr.io/distroless/nodejs24-debian12:970bec506fed86941afb61c21983f25b3b3fe68c

WORKDIR /app

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/bin ./bin
COPY --from=builder /app/package.json ./

EXPOSE 8080
ENTRYPOINT ["/nodejs/bin/node", "/app/bin/mcp-server.js", "start", "--transport", "sse", "--port", "8080"]
