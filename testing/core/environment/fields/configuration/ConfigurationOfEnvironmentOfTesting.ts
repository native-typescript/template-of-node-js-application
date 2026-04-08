import type {
	DebianOfConfigurationOfEnvironmentOfTesting,
	NodeJsOfConfigurationOfEnvironmentOfTesting,
} from "./fields/index.ts";
export type ConfigurationOfEnvironmentOfTesting = {
	readonly debian: DebianOfConfigurationOfEnvironmentOfTesting;
	readonly nodeJs: NodeJsOfConfigurationOfEnvironmentOfTesting;
};
