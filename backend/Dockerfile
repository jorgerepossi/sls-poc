FROM node:14

WORKDIR /app

COPY package*.json /app/

RUN  apt-get update && apt-get install -y openjdk-8-jdk

RUN npm install -g serverless

COPY ./ /app/

RUN npm install

RUN sls dynamodb install

CMD npm run offline