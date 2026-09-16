import {fields_} from "../fields/module.ts";
import {z} from "zod";
export const schema = z.intersection(
	fields_.debian_.schemaForProcessEnv_.schema,
	fields_.nodeJs_.schemaForProcessEnv_.schema,
);
