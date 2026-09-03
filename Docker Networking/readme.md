# Docker Networking

## Task 1

Created frontend, backend and database containers using three networks.
Backend is connected to frontend-net and backend-net.

```bash
docker compose up -d
docker network ls
docker inspect homework-backend
docker exec homework-frontend ping -c 2 backend
docker exec homework-backend ping -c 2 database
docker compose down
```

## Task 2

Apache container using host network:

```bash
docker pull httpd:2.4-alpine
docker run -d --name homework-apache --network host httpd:2.4-alpine
curl http://localhost:80
docker rm -f homework-apache
```

## Task 3

Nginx container using bind mount:

```bash
docker run -d --name homework-bind -p 8080:80 \
  --mount type=bind,source="$(pwd)/bind-mount",target=/usr/share/nginx/html \
  nginx:1.29-alpine
curl http://localhost:8080
```

Changes made in index.html are shown without restarting the container.

## Task 4

Overlay network connects containers running on different Docker hosts.
It is mainly used with Docker Swarm for multi-host communication.

```bash
docker network create --driver overlay --attachable app-overlay
```
