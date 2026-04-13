# website-vue

> Nuxt.js project

## Build Setup

### Via Docker

Install [docker-compose](https://docs.docker.com/compose/install/):

One Time:

```
git clone git@github.com:dripcapital/website-vue.git
cd website-vue
echo "SSH_PRIVATE_KEY=\"$(cat ~/.ssh/id_rsa | openssl rsa)"\" > .env
```

Then run server via:

```
docker-compose up
```

In case you want to add any new node-package, follow these steps:

```
// Make the change in package.json, and then
docker volume rm website-vue_node_modules
docker-compose build
docker-compose up
```

### Manually

```bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
