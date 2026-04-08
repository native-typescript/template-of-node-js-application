import type {schemaForProcessEnvOfTesting} from "../../../../../../../../schema-for-process-env/index.ts";
import type {DockerImageOfDebianOfConfigurationOfEnvironmentOfTesting} from "../DockerImageOfDebianOfConfigurationOfEnvironmentOfTesting.ts";
import {
	parseTagOfDockerImageOfDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv,
	type TagOfDockerImageOfDebianOfConfigurationOfEnvironmentOfTesting,
} from "../tag/index.ts";
import type {z} from "zod";
export function parseDockerImageOfDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfTesting>,
): DockerImageOfDebianOfConfigurationOfEnvironmentOfTesting {
	const tagOfDockerImage: TagOfDockerImageOfDebianOfConfigurationOfEnvironmentOfTesting =
		parseTagOfDockerImageOfDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv(
			processEnv,
		);
	const dockerImage: DockerImageOfDebianOfConfigurationOfEnvironmentOfTesting =
		{tag: tagOfDockerImage};
	return dockerImage;
}
