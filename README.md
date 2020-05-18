# Portfolio project

## In development
### Requirements
- You need to have installed docker
- I recomend run ```yarn install``` locally, because the absence of node_modules causes errors in data types 

### Build
```
docker build -t elvisgastelum/portfolio:typescript-dev .
```

### Run
```
docker run \
  -it \
  --rm \
  -v ${PWD}:/usr/src/app \
  -v /usr/src/app/node_modules \
  -p 3000:3000 \
  -e CHOKIDAR_USEPOLLING=true \
  elvisgastelum/portfolio:dev
```