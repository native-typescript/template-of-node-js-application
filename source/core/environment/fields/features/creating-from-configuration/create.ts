import type {configuration_} from "../../../configuration/module.ts";
import type {Features} from "../Features.ts";
export function create(
	configuration: configuration_.fields_.features_.Features,
): Features {
	const features = {} as const satisfies Features;
	return features;
}
