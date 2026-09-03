FROM eclipse-temurin:25-jdk-alpine AS build
WORKDIR /src
COPY Main.java .
RUN javac Main.java

FROM eclipse-temurin:25-jre-alpine
WORKDIR /app
COPY --from=build /src/Main.class .
EXPOSE 8080
CMD ["java", "Main"]
