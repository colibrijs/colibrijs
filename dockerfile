FROM node:18.17.1-alpine as builder

WORKDIR /usr/colibrijs

COPY package.json package.json
COPY yarn.lock yarn.lock
COPY ./packages/api/package.json ./packages/api/package.json

RUN yarn install --frozen-lockfile --ignore-scripts --production

COPY . .

FROM node:18.17.1-alpine as runner

WORKDIR /usr/colibrijs

ENV NODE_ENV production
ENV SERVICE api

# ROOT
COPY --from=builder /usr/colibrijs/node_modules ./node_modules
COPY --from=builder /usr/colibrijs/package.json ./package.json
COPY --from=builder /usr/colibrijs/tsconfig.json ./tsconfig.json

# API
COPY --from=builder /usr/colibrijs/packages/api ./packages/api

EXPOSE 3000

CMD exec yarn start:$SERVICE
