FROM node:8.15.1-alpine

RUN npm install nodemon -g

USER node

WORKDIR /home/node/app

EXPOSE 3000 5858

CMD ["npm", "start"]