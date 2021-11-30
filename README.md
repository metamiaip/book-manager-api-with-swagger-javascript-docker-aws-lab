# 📖 Minimalist Book Manager API

## Introduction
This is a starter repository for the Minimalist Book Manager API demonstrating basic use of swagger-ui-express and swagger-jsdoc to produce Swagger API documentation.

### Pre-Requisites
- NodeJS installed (v14.18.1 Long Term Support version at time of writing)

### Technologies & Dependencies

- [ExpressJS](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [SQLite3](https://www.npmjs.com/package/sqlite3)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [ESLint](https://eslint.org/)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)

### How to Get Started

- Fork this repo to your Github and then clone the forked version of this repo

### Running the application

In order to run the application, firstly install the dependencies (if you haven't already done so)

```
npm install
```

Next, create a `.env.dev` configuration file in the root of your repository with the settings you'd like to run the application against for the development environment.
You can utilise the same settings specified in `.env` if you wish.

To run the application against different environments, please create a `.env.test` and a `.env.prod` in the root of the repository to specify configuration for these environments.


You can then add a new script to the scripts section of the `package.json` to run the script for your specific environment. For example, the script below will enable you to run against the production configuration.

```JavaScript
"scripts": {
  "start": "node src/server.js",
  "start-prod": "NODE_ENV=prod node src/server.js",
  "test": "jest"
},
```

To setup the "start-prod" in the package.json for Windows OS, you may need to set it like this:

```JavaScript

"start-prod": "set NODE_ENV=prod&& node src/server.js"

```

```

npm start-prod

```

### Running the Unit Tests

In order to run the unit tests run, firstly install the dependencies (if you haven't already done so)

```
npm install
```

Followed by:

```
npm test
```