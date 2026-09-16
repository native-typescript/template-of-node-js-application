import {fields_} from "../fields/module.ts";
import {type} from "arktype";
export const schema = type({
	DOCKER_IMAGE__NODE_JS__VERSION: fields_.version_.schemaForProcessEnv_.schema,
});
