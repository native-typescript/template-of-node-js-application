import {buildDockerImageOfApplication} from "../../core/index.ts";
import {environmentOfTesting} from "../environment/index.ts";
import type {TestContainer} from "testcontainers";
export const dockerImageOfApplication: TestContainer =
	await buildDockerImageOfApplication({
		DEBIAN__DOCKER_IMAGE__TAG__DATE:
			environmentOfTesting.configuration.debian.dockerImage.tag.date,
		NODE_JS__VERSION: environmentOfTesting.configuration.nodeJs.version,
	});
