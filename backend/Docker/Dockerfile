FROM node:lts-jod
WORKDIR ./app/
COPY ../App/package*.json .
RUN npm install
COPY ../App/ .
CMD [ "npm", "run", "start"]
