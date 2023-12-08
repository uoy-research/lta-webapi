#!/bin/sh

name='uoy/lta-api'
file='./docker-lta-api-latest.tar'
remote='langtrackappdev.york.ac.uk'

sudo docker build -t "$name" .
sudo docker save -o "$file" "$name"
sudo chown "$USER:$USER" "$file"
sudo docker load -i "$file"
rsync -rva docker-lta-api-latest.tar "$remote:~/langtrackapp/docker-lta-api-latest.tar"
