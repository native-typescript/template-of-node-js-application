import {fields_} from "../fields/module.ts";
import {z} from "zod";
export const schema = z.object({
	DOCKER_IMAGE__DEBIAN__DOCKER_IMAGE__TAG__DATE:
		fields_.date_.schemaForProcessEnv_.schema,
});
