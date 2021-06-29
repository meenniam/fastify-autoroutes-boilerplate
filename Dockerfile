# build stage
FROM node:14.15.4-alpine3.12
RUN mkdir /server
WORKDIR /server
COPY package*.json ./
COPY yarn.lock ./
# RUN npm install -g yarn
RUN yarn install
COPY . .
EXPOSE 8080
CMD ["yarn", "start"]