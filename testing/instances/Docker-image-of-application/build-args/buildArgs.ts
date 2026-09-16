import type {core_} from "../../../core/module.ts";
import {environment_} from "../../environment/module.ts";
export const buildArgs = {
	DEBIAN__DOCKER_IMAGE__TAG__DATE:
		environment_.environment.configurationOfDockerImage.debian.dockerImage.tag
			.date,
	NODE_JS__VERSION:
		environment_.environment.configurationOfDockerImage.nodeJs.version,
} as const satisfies core_.buildingDockerImageOfApplication_.buildArgs_.BuildArgs;
