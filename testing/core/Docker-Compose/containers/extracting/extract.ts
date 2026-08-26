import type {Containers} from "../Containers.ts";
import type {StartedDockerComposeEnvironment} from "testcontainers";
export function extract(
	environment: StartedDockerComposeEnvironment,
): Containers {
	const containers = {} as const satisfies Containers;
	return containers;
}
