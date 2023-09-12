# yarn install --frozen-lockfile --ignore-scripts
# yarn workspace @colibrijs/cms build
# yarn install --frozen-lockfile --ignore-scripts --production
# docker build . -t colibrijs

FROM node:18.17.1-alpine

WORKDIR /usr/colibrijs

ENV NODE_ENV production
ENV SERVICE api

# ROOT
COPY node_modules node_modules
COPY package.json package.json
COPY tsconfig.json tsconfig.json

# API
COPY ./packages/api ./packages/api

# CMS

COPY ./packages/cms/.next ./packages/cms/.next
COPY ./packages/cms/node_modules ./packages/cms/node_modules
COPY ./packages/cms/package.json ./packages/cms/package.json

EXPOSE 3000
EXPOSE 3001

CMD exec yarn start:$SERVICE
