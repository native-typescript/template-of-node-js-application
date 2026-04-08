import {z} from "zod";
export const schemaForProcessEnvOfTesting = z.object({
	DEBIAN__DOCKER_IMAGE__TAG__DATE: z.string().nonempty(),
	NODE_JS__VERSION: z.templateLiteral([
		z.string().nonempty(),
		`.`,
		z.string().nonempty(),
		`.`,
		z.string().nonempty(),
	]),
});
