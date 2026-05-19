import type {Features} from "../../Features.ts";
import type {schema} from "../schema.ts";
export function parse(processEnv: typeof schema.infer): Features {
	const features = {} as const satisfies Features;
	return features;
}
