# ---> Build stage
FROM node:18-bullseye as node-build

ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install --production=false --frozen-lockfile
RUN npm run build

# ---> Serve stage
FROM nginx:stable-alpine
COPY --from=node-build /usr/src/app/dist /usr/share/nginx/html
