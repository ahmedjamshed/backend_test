FROM node:alpine

WORKDIR /app

RUN apk add git && yarn

RUN yarn global add nodemon

COPY package.json yarn.lock ./

# This command is for installing bcrypt
RUN apk --no-cache add --virtual builds-deps build-base python3

RUN yarn install

# RUN yarn rebuild bcrypt --build-from-source

COPY ./ ./

EXPOSE 8001

CMD ["yarn", "dev"]
