# Template of a Node.js Application

## Environment variables

The application can be configured via [environment variables](https://en.wikipedia.org/wiki/Environment_variable). You can create a [.env](https://nodejs.org/api/environment_variables.html#env-files) file in the root of the project to set the environment variables.

### List

## Starting

Run

```
npm run start
```

to start the application.

## Production setup

For production, you can use Docker to containerize and run the application.

1. Prepare the Docker image's build arguments:
   - `DEBIAN__DOCKER_IMAGE__TAG__DATE`: A part of the Debian Docker image tag to use. This is a date in the format of `YYYYMMDD`. You can find the available tags on the [Debian Docker Hub page](https://hub.docker.com/_/debian).
   - `NODE_JS__VERSION`: The version of Node.js to install in the Docker image.
2. Build the Docker image using the provided `./Dockerfile` while being in the project's root directory:
   ```bash
   docker build \
    --build-arg DEBIAN__DOCKER_IMAGE__TAG__DATE=${DEBIAN__DOCKER_IMAGE__TAG__DATE} \
    --build-arg NODE_JS__VERSION=${NODE_JS__VERSION} \
    --tag template-of-node-js-application:$(npm pkg get version | tr -d '"') \
    .
   ```
3. Run the built Docker image.
