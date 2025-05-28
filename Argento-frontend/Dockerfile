FROM node:20-slim
WORKDIR /app
COPY package.json .
COPY package-lock.json* .
RUN npm install --legacy-peer-deps
COPY . .
# Debug
RUN echo "Listing /app contents:" && ls -la /app/
RUN echo "Listing /app/public contents:" && ls -la /app/public/ || echo "public/ directory missing"
RUN test -f /app/public/index.html && echo "index.html found" || echo "index.html missing"
RUN cat /app/public/index.html || echo "Failed to read index.html"
# Build with esbuild
RUN npm run build
# Copy public/index.html to dist/
RUN mkdir -p dist && cp public/index.html dist/
# Debug dist/ contents
RUN echo "Listing /app/dist contents:" && ls -la /app/dist/
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]