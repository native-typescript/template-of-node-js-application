import {
	createEnvironmentOfSourceFromProcessEnv,
	type EnvironmentOfSource,
	schemaOfProcessEnvOfSource,
} from "../../core/index.ts";
import {stringifyZodIssues} from "@native-typescript/stringifying-zod-issues";
import type {z} from "zod";
const resultOfParsing: z.ZodSafeParseResult<
	z.output<typeof schemaOfProcessEnvOfSource>
> = schemaOfProcessEnvOfSource.safeParse(process.env);
if (!resultOfParsing.success) {
	console.error(
		`An error occurred while parsing the environment variables for the environment of source:
${stringifyZodIssues(resultOfParsing.error.issues)}`,
	);
	process.exit(1);
}
export const environmentOfSource: EnvironmentOfSource =
	createEnvironmentOfSourceFromProcessEnv(resultOfParsing.data);
