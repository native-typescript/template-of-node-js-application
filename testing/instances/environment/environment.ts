import {core_} from "../../core/module.ts";
import {stringifyingArktypeErrors_} from "@native-typescript/stringifying-arktype-errors";
import {ArkErrors} from "arktype";
const resultOfParsing =
	core_.environment_.configuration_.schemaForProcessEnv_.schema(process.env);
if (resultOfParsing instanceof ArkErrors) {
	console.error(
		`An error occurred while parsing the environment variables for the configuration of testing:
${stringifyingArktypeErrors_.many_.stringify(resultOfParsing)}`,
	);
	process.exit(1);
}
export const environment = core_.environment_.creatingFromConfiguration_.create(
	resultOfParsing,
) satisfies core_.environment_.Environment;
