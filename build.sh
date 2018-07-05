#!/bin/bash

clean() {
  echo "Removing old images"
  docker rmi $(docker images -q)
}

build() {
  echo "Building images"
  docker pull docker.elastic.co/elasticsearch/elasticsearch:6.3.0
  docker pull docker.elastic.co/kibana/kibana:6.3.0
  docker image build -t ccopy-client:0.0.1 client/
  docker image build -t ccopy-api:0.0.1 api/
  docker build -t local-nginx nginx/.
  docker build -t ccopy-provision provision/
}

run() {
  echo "Running images"
  docker container run -d -p 9200:9200 -p 9300:9300 -it -h elasticsearch --net ccopy --name elasticsearch docker.elastic.co/elasticsearch/elasticsearch:6.3.0
  docker container run -d -p 5601:5601 -h kibana --name kibana --net ccopy docker.elastic.co/kibana/kibana:6.3.0
  docker container run -it -p 3000:3000 -p 35729:35729 -v $(pwd)/client:/app -d --net ccopy --name ccopy-client ccopy-client:0.0.1
  docker container run -it -p 8080:8080 -d --net ccopy --name ccopy-api ccopy-api:0.0.1
  docker container run -d --name nginx -p 80:80 -u 0 --restart unless-stopped --net ccopy local-nginx:latest
  echo "waiting for elasticsearch to wake up..."
  sleep 40
  docker container run -it --rm --net ccopy --name ccopy-provision ccopy-provision:latest
}

case "$1" in
  clean)
    clean
    ;;
	build)
		build
		;;
  run)
    run
    ;;
	*)
    clean
		build
    run
		;;
esac

echo "All done!"
