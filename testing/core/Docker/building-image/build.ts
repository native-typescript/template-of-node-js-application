import type {buildArgs_} from "./build-args/module.ts";
import {GenericContainer} from "testcontainers";
export async function build(
	buildArgs: buildArgs_.BuildArgs,
): Promise<GenericContainer> {
	const image = (await GenericContainer.fromDockerfile(`.`, `Dockerfile`)
		.withBuildArgs(buildArgs)
		.build()) satisfies GenericContainer;
	return image;
}
