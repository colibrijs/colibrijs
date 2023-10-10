# yarn install --frozen-lockfile --ignore-scripts
# yarn workspace @colibrijs/api build
# yarn workspace @colibrijs/cms build
# yarn workspace @colibrijs/app build
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
EXPOSE 3000
COPY ./packages/api ./packages/api

# APP
EXPOSE 3002
COPY ./packages/app/.next ./packages/app/.next
COPY ./packages/app/node_modules ./packages/app/node_modules
COPY ./packages/app/package.json ./packages/app/package.json

# CMS
EXPOSE 3001
COPY ./packages/cms/.next ./packages/cms/.next
COPY ./packages/cms/node_modules ./packages/cms/node_modules
COPY ./packages/cms/package.json ./packages/cms/package.json

CMD exec yarn start:$SERVICE
