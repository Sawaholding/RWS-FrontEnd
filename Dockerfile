FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm i
EXPOSE 3000
COPY . /app
CMD ["npm","start"]