ARG DEBIAN__DOCKER_IMAGE__TAG__DATE
FROM debian:stable-${DEBIAN__DOCKER_IMAGE__TAG__DATE}-slim AS running
ARG DEBIAN__DOCKER_IMAGE__TAG__DATE
USER root
RUN useradd -m -s /bin/bash runner
RUN mkdir /home/runner/template-of-node-js-application
RUN chown runner:runner /home/runner/template-of-node-js-application
RUN apt-get update && apt-get install -y --no-install-recommends curl xz-utils ca-certificates
ARG NODE_JS__VERSION
ENV NODE_JS__VERSION=${NODE_JS__VERSION}
RUN curl -fsSL https://nodejs.org/dist/v${NODE_JS__VERSION}/node-v${NODE_JS__VERSION}-linux-x64.tar.xz -o /tmp/node.tar.xz
RUN tar -xJf /tmp/node.tar.xz -C /tmp
RUN cp -r /tmp/node-v${NODE_JS__VERSION}-linux-x64/* /usr/local/
RUN rm -rf /tmp/node.tar.xz /tmp/node-v${NODE_JS__VERSION}-linux-x64
WORKDIR /home/runner/template-of-node-js-application
USER runner
COPY --chown=runner:runner . .
RUN npm clean-install --omit=dev
ENV NODE_OPTIONS="--import=@native-typescript/loader-of-typescript-for-node-js"
ENTRYPOINT ["npm", "run", "start"]
