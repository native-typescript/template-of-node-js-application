import type {Configuration} from "../Configuration.ts";
import {type} from "arktype";
export const schema = type({}).pipe(
	function parse(processEnv): Configuration {
		const configuration = {} as const satisfies Configuration;
		return configuration;
	},
);
