#!/bin/bash

echo "Starting deployment..."

docker build -t app-image .

docker stop app-container || true
docker rm app-container || true

docker run -d --name app-container -p 80:5000 app-image

echo "Deployment completed successfully."
