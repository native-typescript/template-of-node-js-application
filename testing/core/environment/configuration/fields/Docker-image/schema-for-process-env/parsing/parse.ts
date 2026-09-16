import type {DockerImage} from "../../DockerImage.ts";
import {fields_} from "../../fields/module.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): DockerImage {
	const debianOfDockerImage =
		fields_.debian_.schemaForProcessEnv_.parsing_.parse(
			processEnv,
		) satisfies fields_.debian_.Debian;
	const nodeJsOfDockerImage =
		fields_.nodeJs_.schemaForProcessEnv_.parsing_.parse(
			processEnv,
		) satisfies fields_.nodeJs_.NodeJs;
	const dockerImage = {
		debian: debianOfDockerImage,
		nodeJs: nodeJsOfDockerImage,
	} as const satisfies DockerImage;
	return dockerImage;
}
