# Setup

This app is based on Lerna monorepo that contains NestJS backend and Angular frontend. Additionaly the MySQL is usaed as the DB, with Adminer to easly access the data without any additional tools. The DB is created via Docker.

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

### App