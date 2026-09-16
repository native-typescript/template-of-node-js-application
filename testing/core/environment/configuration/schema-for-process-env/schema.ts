import type {Configuration} from "../Configuration.ts";
import {fields_} from "../fields/module.ts";
export const schema =
	fields_.dockerImage_.schemaForProcessEnv_.schema.transform<Configuration>(
		function parse(processEnv, context): Configuration {
			const dockerImageOfConfiguration =
				fields_.dockerImage_.schemaForProcessEnv_.parsing_.parse(
					processEnv,
				) satisfies fields_.dockerImage_.DockerImage;
			const configuration = {
				dockerImage: dockerImageOfConfiguration,
			} as const satisfies Configuration;
			return configuration;
		},
	);
