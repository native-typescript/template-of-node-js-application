import type {Features} from "../../Features.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): Features {
	const features = {} as const satisfies Features;
	return features;
}
