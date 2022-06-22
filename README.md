![Node version](https://img.shields.io/badge/Node-v16.14.0-%23339933)
![Twitter Follow](https://img.shields.io/twitter/follow/Miwoli?style=social)
![GitHub followers](https://img.shields.io/github/followers/Miwoli?style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/Miwoli/wsti-kanban)
![Lines of code](https://img.shields.io/tokei/lines/github/Miwoli/wsti-kanban)

# Setup

This app is based on Lerna monorepo that contains NestJS backend and Angular frontend. Additionaly the MySQL is used as the DB, with Adminer to easly access the data without any additional tools. The DB is created via Docker.

## Instalation

### DB

1. Create `.env` file in the root folder of the project
2. Type in the DB credentials you want to use for the Docker MySQL

```bash
MYSQL_ROOT_PASSWORD="lorem"
MYSQL_DATABASE="ipsum"
MYSQL_USER="dolor"
MYSQL_PASSWORD="sit"
```

### Api

1. In `api/src/app.module.ts` type in the proper DB credentials. Should come from env, but for now screw it, as it's a small app created only to pass an uni course.

// TODO: Add note about setting .env file in API root file with

```bash
DB_USER=user
DB_PASS=password
DB_NAME=name
JWT_SECRET=secret
```

### How to run locally

1. From the root folder run `docker compose up -d` to start DB and Adminer
2. Make sure you have `Lerna` installed globally `npm i -g lerna` and run `lerna bootstrap` to install all dependencies
3. Run `npm start` to start both API and Frontend app
4. The app will be accessible on `localhost:4200` for the fronend part and `localhost:3000` for the OpenAPI documentation. Also `localhost:8080` is used by Adminer for a dev DB access
