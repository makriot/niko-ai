FROM node:latest

RUN apt-get update && \
apt-get -y install sudo

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY . /app

# Install dependencies
RUN sudo apt-get -y install npm

RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object


# Copy everything to the container
CMD ["npm", "start"]

# Expose port
EXPOSE 3000