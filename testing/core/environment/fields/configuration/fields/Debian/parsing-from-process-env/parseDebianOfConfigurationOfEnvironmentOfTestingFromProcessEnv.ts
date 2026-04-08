import type {schemaForProcessEnvOfTesting} from "../../../../../../schema-for-process-env/index.ts";
import type {DebianOfConfigurationOfEnvironmentOfTesting} from "../DebianOfConfigurationOfEnvironmentOfTesting.ts";
import {
	type DockerImageOfDebianOfConfigurationOfEnvironmentOfTesting,
	parseDockerImageOfDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv,
} from "../fields/index.ts";
import type {z} from "zod";
export function parseDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfTesting>,
): DebianOfConfigurationOfEnvironmentOfTesting {
	const dockerImageOfDebian: DockerImageOfDebianOfConfigurationOfEnvironmentOfTesting =
		parseDockerImageOfDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv(
			processEnv,
		);
	const debian: DebianOfConfigurationOfEnvironmentOfTesting = {
		dockerImage: dockerImageOfDebian,
	};
	return debian;
}
