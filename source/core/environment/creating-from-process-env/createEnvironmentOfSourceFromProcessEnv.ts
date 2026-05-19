import type {schemaForProcessEnvOfSource} from "../../schema-for-process-env/index.ts";
import type {EnvironmentOfSource} from "../EnvironmentOfSource.ts";
import {
	type ConfigurationOfEnvironmentOfSource,
	parseConfigurationOfEnvironmentOfSourceFromProcessEnv,
} from "../fields/index.ts";
import type {z} from "zod";
export function createEnvironmentOfSourceFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfSource>,
): EnvironmentOfSource {
	const configurationOfEnvironment: ConfigurationOfEnvironmentOfSource =
		parseConfigurationOfEnvironmentOfSourceFromProcessEnv(processEnv);
	const evironment: EnvironmentOfSource = {
		configuration: configurationOfEnvironment,
	};
	return evironment;
}
