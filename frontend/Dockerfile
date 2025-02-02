FROM node:22

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock (or package-lock.json)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that Vite uses
EXPOSE 5173

CMD ["npm", "run", "dev"]