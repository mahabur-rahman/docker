# Use a Node.js image that includes npm
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port your application will run on
EXPOSE 5173

# Command to run your application (make sure to adjust if needed)
CMD npm run dev
