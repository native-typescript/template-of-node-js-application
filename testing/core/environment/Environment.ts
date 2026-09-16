import type {configuration_} from "./configuration/module.ts";
export interface Environment {
	readonly configurationOfDockerImage: configuration_.fields_.dockerImage_.DockerImage;
}
