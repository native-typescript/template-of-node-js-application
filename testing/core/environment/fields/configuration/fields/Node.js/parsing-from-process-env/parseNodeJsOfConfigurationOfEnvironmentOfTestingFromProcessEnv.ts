import type {schemaForProcessEnvOfTesting} from "../../../../../../schema-for-process-env/index.ts";
import type {NodeJsOfConfigurationOfEnvironmentOfTesting} from "../NodeJsOfConfigurationOfEnvironmentOfTesting.ts";
import type {z} from "zod";
export function parseNodeJsOfConfigurationOfEnvironmentOfTestingFromProcessEnv(
	processEnv: z.output<typeof schemaForProcessEnvOfTesting>,
): NodeJsOfConfigurationOfEnvironmentOfTesting {
	const nodeJs: NodeJsOfConfigurationOfEnvironmentOfTesting = {
		version: processEnv.NODE_JS__VERSION,
	};
	return nodeJs;
}
