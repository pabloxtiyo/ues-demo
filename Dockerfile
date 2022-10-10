FROM node:18-alpine3.15
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npx nx run reminder:test
RUN npx nx run task-api:build && npx nx run demo:build
EXPOSE 3333
CMD ["npm", "run", "start:prod"]

