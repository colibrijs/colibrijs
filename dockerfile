# Extends from nodejs image
FROM node:18-alpine

ENV SERVICE api

# Project will available on the path /usr/colibrijs/api
WORKDIR /usr/colibrijs/api

# Copy all files from os to working dir inside container.
# We need to copy all project, because we work in monorepo.
COPY . .

# Install dependencies
RUN yarn install --frozen-lockfile --ignore-scripts

# Our api works on the port 3000, so we expose this port
EXPOSE 3000

# This command will be executed only when image is running. When image is building this command will
# be skipped. So, the "RUN" we use for building image and the "CMD" for running application
CMD exec yarn start:$SERVICE
