import type {configuration_} from "../configuration/module.ts";
import type {Environment} from "../Environment.ts";
import {fields_} from "../fields/module.ts";
export function create(
	configuration: configuration_.Configuration,
): Environment {
	const featuresOfEnvironment =
		fields_.features_.creatingFromConfiguration_.create(
			configuration.features,
		) satisfies fields_.features_.Features;
	const environment = {
		features: featuresOfEnvironment,
	} as const satisfies Environment;
	return environment;
}
