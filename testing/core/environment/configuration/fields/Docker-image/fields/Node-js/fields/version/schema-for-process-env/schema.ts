import {z} from "zod";
export const schema = z.templateLiteral([
	z.string().nonempty(),
	`.`,
	z.string().nonempty(),
	`.`,
	z.string().nonempty(),
]);
