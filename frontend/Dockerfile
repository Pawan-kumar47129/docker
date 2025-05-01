# Build stage
FROM node:18 AS builder

# Add build arguments


WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for Nginx (production)
# Note: Vite dev server uses port 5173, but in production we use Nginx on port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
