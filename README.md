# Portfolio project

## In development
### Requirements
- You need to have installed docker

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
  elvisgastelum/portfolio:typescript-dev
```