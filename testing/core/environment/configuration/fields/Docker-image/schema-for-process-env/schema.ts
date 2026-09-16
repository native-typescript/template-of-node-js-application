import {fields_} from "../fields/module.ts";
export const schema = fields_.debian_.schemaForProcessEnv_.schema.and(
	fields_.nodeJs_.schemaForProcessEnv_.schema,
);
