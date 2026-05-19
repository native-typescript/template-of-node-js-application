import type {schemaForProcessEnvOfSource} from "../../../../schema-for-process-env/index.ts";
import type {ConfigurationOfEnvironmentOfSource} from "../ConfigurationOfEnvironmentOfSource.ts";
import type {z} from "zod";
export function parseConfigurationOfEnvironmentOfSourceFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfSource>,
): ConfigurationOfEnvironmentOfSource {
	const configuration: ConfigurationOfEnvironmentOfSource = {};
	return configuration;
}
