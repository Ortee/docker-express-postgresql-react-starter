docker exec -it $(docker ps | grep server | awk '{ print $1 }') /bin/sh -c 'npm run db:migrate'
docker exec -it $(docker ps | grep server | awk '{ print $1 }') /bin/sh -c 'npm run db:seed'
docker exec -it $(docker ps | grep frontend | awk '{ print $1 }') /bin/sh -c 'npm rebuild node-sass'
docker kill $(docker ps | grep server | awk '{ print $1 }')
docker kill $(docker ps | grep frontend | awk '{ print $1 }')
docker kill $(docker ps | grep postgres | awk '{ print $1 }')
docker-compose up
