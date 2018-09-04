FROM node:9 as react-builder
WORKDIR /app
RUN rm -rf /app/*
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run prd

FROM httpd:2.4
COPY --from=react-builder ./app/dist/ /usr/local/apache2/htdocs/