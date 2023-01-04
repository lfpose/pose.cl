FROM debian:bullseye as builder
## stage 1 - build

ARG NODE_VERSION=18.12.1

RUN apt-get update; apt install -y curl
RUN curl https://get.volta.sh | bash
ENV VOLTA_HOME /root/.volta
ENV PATH /root/.volta/bin:$PATH
RUN volta install node@${NODE_VERSION}

RUN mkdir /app
WORKDIR /app

ENV NODE_ENV production

COPY . .

RUN npm install --production=false && npm run build


## ---------
FROM pierrezemb/gostatic
## stage 2 - serve

COPY --from=builder /app/dist /src/http


