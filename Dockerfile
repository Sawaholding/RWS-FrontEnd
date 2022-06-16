
FROM node:0.14.29

ENV VITE_REPO=$VITE_REPO
ENV VITE_DIR=$VITE_DIR

WORKDIR /app
COPY package.json /app
RUN npm i
EXPOSE 3000
COPY . /app
CMD ["npm","run","dev"]