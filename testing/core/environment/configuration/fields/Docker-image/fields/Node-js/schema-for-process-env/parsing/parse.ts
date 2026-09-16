import type {fields_} from "../../fields/module.ts";
import type {NodeJs} from "../../NodeJs.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): NodeJs {
	const versionOfNodeJs =
		processEnv.DOCKER_IMAGE__NODE_JS__VERSION satisfies fields_.version_.Version;
	const nodeJs = {version: versionOfNodeJs} as const satisfies NodeJs;
	return nodeJs;
}
