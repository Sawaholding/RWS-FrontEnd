FROM node:0.14.29
WORKDIR /app
COPY package.json /app
RUN npm i
EXPOSE 3000
COPY . /app
CMD ["npm","run","dev"]