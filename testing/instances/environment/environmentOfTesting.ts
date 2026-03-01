import {
	createEnvironmentOfTestingFromProcessEnv,
	type EnvironmentOfTesting,
	schemaForProcessEnvOfTesting,
} from "../../core/index.ts";
import {stringifyZodIssues} from "@native-typescript/stringifying-zod-issues";
import type {z} from "zod";
const resultOfParsing: z.ZodSafeParseResult<
	z.output<typeof schemaForProcessEnvOfTesting>
> = schemaForProcessEnvOfTesting.safeParse(process.env);
if (!resultOfParsing.success) {
	console.error(
		`An error occurred while parsing the environment variables for the configuration of testing:
${stringifyZodIssues(resultOfParsing.error.issues)}`,
	);
	process.exit(1);
}
export const environmentOfTesting: EnvironmentOfTesting =
	createEnvironmentOfTestingFromProcessEnv(resultOfParsing.data);
