FROM node:14-alpine3.15
# Adding build tools to make yarn install work on Apple silicon / arm64 machines
# RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN npm run server:build
CMD ["node", "dist/server.js"]