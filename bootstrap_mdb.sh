#!/bin/bash

echo ">>> starting bootstrap actions..."

echo ">>> config node initializing"
docker-compose exec config01 sh -c "mongo --port 27017 < /scripts/init-configserver.js"

echo ">>> shard01 node initializing"
docker-compose exec shard01 sh -c "mongo --port 27017 < /scripts/init-shard01.js"

echo ">>> shard02 node initializing"
docker-compose exec shard02 sh -c "mongo --port 27017 < /scripts/init-shard02.js"

echo ">>> waiting 25 secs"
sleep 25

echo ">>> adding shards via router"
docker-compose exec router sh -c "mongo --port 27017 < /scripts/init-router.js"

echo ">>> waiting 10 secs"
sleep 10

echo ">>> setup sample data model"
docker-compose exec router sh -c "mongo --port 27017 < /scripts/init-datamodel.js"

echo ">>> bootstrap finished!"
