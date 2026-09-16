import type {Debian} from "../../Debian.ts";
import {dockerImage_} from "../../Docker-image/module.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): Debian {
	const dockerImageOfDebian = dockerImage_.schemaForProcessEnv_.parsing_.parse(
		processEnv,
	) satisfies dockerImage_.DockerImage;
	const debian = {dockerImage: dockerImageOfDebian} as const satisfies Debian;
	return debian;
}
