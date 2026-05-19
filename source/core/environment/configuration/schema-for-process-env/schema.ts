import type {Configuration} from "../Configuration.ts";
import {fields_} from "../fields/module.ts";
export const schema =
	fields_.features_.schemaForProcessEnv_.schema.transform<Configuration>(
		function parse(processEnv, context): Configuration {
			const featuresOfConfiguration =
				fields_.features_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.features_.Features;
			const configuration = {
				features: featuresOfConfiguration,
			} as const satisfies Configuration;
			return configuration;
		},
	);
