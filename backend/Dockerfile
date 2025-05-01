FROM node:18

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

#expose the port
EXPOSE 5000

# Start app
CMD ["npm", "run", "dev"]