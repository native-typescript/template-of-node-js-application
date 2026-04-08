import type {schemaForProcessEnvOfTesting} from "../../../../../../../../../schema-for-process-env/index.ts";
import type {TagOfDockerImageOfDebianOfConfigurationOfEnvironmentOfTesting} from "../TagOfDockerImageOfDebianOfConfigurationOfEnvironmentOfTesting.ts";
import type {z} from "zod";
export function parseTagOfDockerImageOfDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfTesting>,
): TagOfDockerImageOfDebianOfConfigurationOfEnvironmentOfTesting {
	const tag: TagOfDockerImageOfDebianOfConfigurationOfEnvironmentOfTesting = {
		date: processEnv.DEBIAN__DOCKER_IMAGE__TAG__DATE,
	};
	return tag;
}
