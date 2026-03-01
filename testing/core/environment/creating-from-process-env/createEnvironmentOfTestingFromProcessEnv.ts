import type {schemaForProcessEnvOfTesting} from "../../schema-for-process-env/index.ts";
import type {EnvironmentOfTesting} from "../EnvironmentOfTesting.ts";
import {
	type ConfigurationOfEnvironmentOfTesting,
	parseConfigurationOfEnvironmentOfTestingFromProcessEnv,
} from "../fields/index.ts";
import type {z} from "zod";
export function createEnvironmentOfTestingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfTesting>,
): EnvironmentOfTesting {
	const configurationOfEnvironment: ConfigurationOfEnvironmentOfTesting =
		parseConfigurationOfEnvironmentOfTestingFromProcessEnv(processEnv);
	const environment: EnvironmentOfTesting = {
		configuration: configurationOfEnvironment,
	};
	return environment;
}
