# Utilising Docker multistage builds
# Part 1 use the node base image to produce
# the build of the application
FROM node:16.13.0 AS appbuild
WORKDIR /app
COPY package.json .
COPY swagger.yaml .
COPY ./src ./src
RUN npm install --production

# Part 2
# This build takes the built code from part 1
# And executes it to start the application
FROM node:16.13-bullseye-slim AS prod
USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY --from=appbuild --chown=node:node /app .
EXPOSE ${PORT}
ENTRYPOINT ["npm", "start"]