import type {fields_} from "../../fields/module.ts";
import type {Tag} from "../../Tag.ts";
import type {schema} from "../schema.ts";
import type {z} from "zod";
export function parse(processEnv: z.output<typeof schema>): Tag {
	const dateOfTag =
		processEnv.DOCKER_IMAGE__DEBIAN__DOCKER_IMAGE__TAG__DATE satisfies fields_.date_.Date_;
	const tag = {date: dateOfTag} as const satisfies Tag;
	return tag;
}
