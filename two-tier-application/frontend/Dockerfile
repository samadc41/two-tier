FROM node:14-buster-slim as devolop
WORKDIR /frontend
COPY . /frontend
RUN npm install
CMD [ "npm", "run", "start" ]

FROM node:14-buster-slim as build
WORKDIR /frontend
COPY . /frontend
RUN npm install
RUN npm run build

FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /frontend/build /usr/share/nginx/html



