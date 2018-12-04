docker info


IMAGES ========

docker images

docker run imageName

docker rmi imageID

GET image id =======
docker images -q

CONTAINER ======
docker ps
docker start containerID
docker stop containerID

docker run --name containerName -it imageName

docker stats
docker system df
docker system prune

COMPOSE =======
docker-compose up -d
docker-compose down

Rebuild ====
docker-compose up --force-recreate --build -d
docker image prune -f

Get into container =====
docker exec -it bd-node-mongo bash

=========== 
===Process logs---
docker logs contID
docker service logs

SSH ============================
create key (create private and public key) ====
ssh-keygen

views key ====
ls ~/.ssh


Digital Ocean =============
root@142.93.223.73


Mongo update ===========
db.users.update({id: ObjecId()}, {$set: {}})
