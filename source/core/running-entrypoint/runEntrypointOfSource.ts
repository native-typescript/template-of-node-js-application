import type {EnvironmentOfSource} from "../environment/index.ts";
export async function runEntrypointOfSource(
	environment: EnvironmentOfSource,
): Promise<void> {
	console.log(`Hello world!`);
	return;
}
