import type {schemaForProcessEnvOfTesting} from "../../../../schema-for-process-env/index.ts";
import type {ConfigurationOfEnvironmentOfTesting} from "../ConfigurationOfEnvironmentOfTesting.ts";
import {
	type DebianOfConfigurationOfEnvironmentOfTesting,
	type NodeJsOfConfigurationOfEnvironmentOfTesting,
	parseDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv,
	parseNodeJsOfConfigurationOfEnvironmentOfTestingFromProcessEnv,
} from "../fields/index.ts";
import type {z} from "zod";
export function parseConfigurationOfEnvironmentOfTestingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfTesting>,
): ConfigurationOfEnvironmentOfTesting {
	const debianOfConfiguration: DebianOfConfigurationOfEnvironmentOfTesting =
		parseDebianOfConfigurationOfEnvironmentOfTestingFromProcessEnv(processEnv);
	const nodeJsOfConfiguration: NodeJsOfConfigurationOfEnvironmentOfTesting =
		parseNodeJsOfConfigurationOfEnvironmentOfTestingFromProcessEnv(processEnv);
	const configuration: ConfigurationOfEnvironmentOfTesting = {
		debian: debianOfConfiguration,
		nodeJs: nodeJsOfConfiguration,
	};
	return configuration;
}
