ARG DEBIAN__DOCKER_IMAGE__TAG__DATE
FROM debian:stable-${DEBIAN__DOCKER_IMAGE__TAG__DATE}-slim AS developing
ARG DEBIAN__DOCKER_IMAGE__TAG__DATE
ENV DEBIAN__DOCKER_IMAGE__TAG__DATE=${DEBIAN__DOCKER_IMAGE__TAG__DATE}
USER root
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates && rm -rf /var/lib/apt/lists/*
RUN useradd -m -s /bin/bash developer
RUN mkdir /home/developer/template-of-node-js-application
RUN chown developer:developer /home/developer/template-of-node-js-application
RUN apt-get update && apt-get install -y --no-install-recommends git && rm -rf /var/lib/apt/lists/*
USER developer
WORKDIR /home/developer/template-of-node-js-application
