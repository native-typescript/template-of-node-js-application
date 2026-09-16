import type {fields_} from "../../fields/module.ts";
import type {Tag} from "../../Tag.ts";
import type {schema} from "../schema.ts";
export function parse(processEnv: typeof schema.infer): Tag {
	const dateOfTag =
		processEnv.DOCKER_IMAGE__DEBIAN__DOCKER_IMAGE__TAG__DATE satisfies fields_.date_.Date_;
	const tag = {date: dateOfTag} as const satisfies Tag;
	return tag;
}
