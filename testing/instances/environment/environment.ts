import {core_} from "../../core/module.ts";
import {stringifyingZodIssues} from "@native-typescript/stringifying-zod-issues";
import type {z} from "zod";
const resultOfParsing =
	core_.environment_.configuration_.schemaForProcessEnv_.schema.safeParse(
		process.env,
	) satisfies z.ZodSafeParseResult<core_.environment_.configuration_.Configuration>;
if (!resultOfParsing.success) {
	console.error(
		`An error occurred while parsing the environment variables for the configuration of testing:
${stringifyingZodIssues.stringifyZodIssues(resultOfParsing.error.issues)}`,
	);
	process.exit(1);
}
export const environment = core_.environment_.creatingFromConfiguration_.create(
	resultOfParsing.data,
) satisfies core_.environment_.Environment;
