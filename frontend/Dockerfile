FROM node:14

RUN apt-get update

WORKDIR /app

COPY --chown=node package*.json ./

RUN npm ci -qy

COPY ./ /app/

EXPOSE 3000

CMD [ "npm", "start", "run", "--host", "0.0.0.0"]