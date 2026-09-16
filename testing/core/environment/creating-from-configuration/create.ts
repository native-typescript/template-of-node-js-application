import type {configuration_} from "../configuration/module.ts";
import type {Environment} from "../Environment.ts";
export function create(
	configuration: configuration_.Configuration,
): Environment {
	const environment = {
		configurationOfDockerImage: configuration.dockerImage,
	} as const satisfies Environment;
	return environment;
}
