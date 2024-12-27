# Base Node.js image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json tsconfig.json ./

# Install dependencies
RUN npm install

# Copy the entire source code
COPY ./src ./src

# Build the TypeScript code
RUN npm run build

# Expose the default port for your server (if applicable)
EXPOSE 8080

# Command to run the MCP server
CMD ["node", "./build/index.js"]
