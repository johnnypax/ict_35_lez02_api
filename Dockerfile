FROM node:22-alpine

ENV NODE_ENV=production
ENV HOST=0.0.0.0

WORKDIR /app

COPY --chown=node:node package.json package-lock.json ./
USER node
RUN npm ci --omit=dev

COPY --chown=node:node app.js ./app.js
COPY --chown=node:node controllers ./controllers
COPY --chown=node:node data ./data
COPY --chown=node:node routes ./routes

EXPOSE 4000

CMD ["node", "app.js"]
