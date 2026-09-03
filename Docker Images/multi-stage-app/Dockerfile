FROM node:24-alpine AS build
WORKDIR /build
COPY package.json server.js ./
RUN mkdir /output && cp package.json server.js /output/

FROM node:24-alpine AS runtime
WORKDIR /app
COPY --from=build /output/ ./
USER node
EXPOSE 8080
CMD ["npm", "start"]
