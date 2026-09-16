import {fields_} from "../fields/module.ts";
import {z} from "zod";
export const schema = z.object({
	DOCKER_IMAGE__NODE_JS__VERSION: fields_.version_.schemaForProcessEnv_.schema,
});
