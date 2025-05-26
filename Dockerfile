FROM node:20-slim
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
# Debug: List files
RUN ls -la /app/public/ || echo "public/ directory missing"
RUN test -f /app/public/index.html && echo "index.html found" || echo "index.html missing"

RUN echo "=== Checking index.html ===" && \
    ls -la /app/public/ && \
    test -f /app/public/index.html && echo "index.html found" || echo "index.html missing"

RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]