import type {DockerImage} from "../../DockerImage.ts";
import {tag_} from "../../tag/module.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): DockerImage {
	const tagOfDockerImage = tag_.schemaForProcessEnv_.parsing_.parse(
		processEnv,
	) satisfies tag_.Tag;
	const dockerImage = {tag: tagOfDockerImage} as const satisfies DockerImage;
	return dockerImage;
}
