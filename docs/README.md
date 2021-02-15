# TAG (r|t)est API

### Setup 
```sh
$ npm install
$ cp .env.example .env
```

### Config
.env 
- PORT=
- DATABASE_NAME=
- DATABASE_HOST=
- DATABASE_PORT=
- DATABASE_USERNAME=
- DATABASE_PASSWORD=
- DIALECT=
- JWTSECRET=
- REDIS_HOST=
- REDIS_PORT=

### Start server

dev mode:
```sh
$ npm run dev
```
prod mode:
```sh
$ npm start
```



## Users

* [Get Token](users/token.md)
* [Get](users/get.md)
* [Get by userId](users/getById.md)
* [Create](users/create.md)
* [Update](users/update.md)
* [Delete](users/delete.md)

## Books

* [Get by userId](books/get.md)
* [Get by bookId](books/getById.md)
* [Create](books/create.md)
* [Update](books/update.md)
* [Delete](books/delete.md)