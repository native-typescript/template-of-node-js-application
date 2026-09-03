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
RUN apt-get update && apt-get install -y --no-install-recommends openssh-client && rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y --no-install-recommends curl && rm -rf /var/lib/apt/lists/*
ARG NODE_JS__VERSION
RUN curl -fsSL https://nodejs.org/dist/v${NODE_JS__VERSION}/node-v${NODE_JS__VERSION}-linux-x64.tar.xz -o /tmp/node.tar.xz
RUN apt-get update && apt-get install -y --no-install-recommends xz-utils && rm -rf /var/lib/apt/lists/*
RUN tar -xJf /tmp/node.tar.xz -C /tmp
RUN apt-get purge -y --auto-remove xz-utils
ARG NODE_JS__VERSION
RUN cp -r /tmp/node-v${NODE_JS__VERSION}-linux-x64/* /usr/local/
ARG NODE_JS__VERSION
RUN rm -rf /tmp/node.tar.xz /tmp/node-v${NODE_JS__VERSION}-linux-x64
RUN apt-get update && apt-get install -y --no-install-recommends libatomic1 && rm -rf /var/lib/apt/lists/*
ARG NODE_JS__VERSION
ENV NODE_JS__VERSION=${NODE_JS__VERSION}
ARG DOCKER_GID
RUN groupadd -g ${DOCKER_GID} docker
RUN usermod -aG docker developer
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates docker-cli docker-compose && rm -rf /var/lib/apt/lists/*
USER developer
WORKDIR /home/developer/template-of-node-js-application
RUN curl -fsSL https://opencode.ai/install | bash
