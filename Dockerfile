FROM node:16-alpine3.14

ENV PORT=3000

RUN mkdir /app && chown -R node:node /app
WORKDIR /app
COPY --chown=node:node package*.json ./
USER node
RUN npm ci
COPY --chown=node:node *.js ./

CMD [ "node", "index.js" ]
