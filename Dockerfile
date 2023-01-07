##FROM debian:bullseye as builder
#### stage 1 - build

##ARG NODE_VERSION=18.12.1

##RUN apt-get update; apt install -y curl
##RUN curl https://get.volta.sh | bash
##ENV VOLTA_HOME /root/.volta
##ENV PATH /root/.volta/bin:$PATH
##RUN volta install node@${NODE_VERSION}

##RUN mkdir /app
##WORKDIR /app

##ENV NODE_ENV production

##COPY . .

##RUN npm install --production=false && npm run build



#FROM pierrezemb/gostatic
#COPY ./dist/index.html /srv/http/index.html
#COPY ./dist/ /srv/http/

FROM nginx
COPY --chown=nginx:nginx ./dist /usr/share/nginx/html
#FROM debian:bullseye as builder

#ARG NODE_VERSION=18.12.1

#RUN apt-get update; apt install -y curl
#RUN curl https://get.volta.sh | bash
#ENV VOLTA_HOME /root/.volta
#ENV PATH /root/.volta/bin:$PATH
#RUN volta install node@${NODE_VERSION}

#RUN mkdir /app
#WORKDIR /app

#ENV NODE_ENV production

#COPY . .

#RUN npm install --production=false && npm run build
#FROM debian:bullseye

#LABEL fly_launch_runtime="nodejs"

#COPY --from=builder /root/.volta /root/.volta
#COPY --from=builder /app /app

#WORKDIR /app
#ENV NODE_ENV production
#ENV PATH /root/.volta/bin:$PATH

#CMD [ "npm", "run", "start" ]
