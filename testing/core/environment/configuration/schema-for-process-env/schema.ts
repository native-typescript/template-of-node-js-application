import type {Configuration} from "../Configuration.ts";
import {z} from "zod";
export const schema = z
	.object({})
	.transform<Configuration>(function parse(processEnv, context): Configuration {
		const configuration = {} as const satisfies Configuration;
		return configuration;
	});
