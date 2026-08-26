import {containersOfDockerComposeEnvironment_} from "../containers-of-Docker-Compose-environment/module.ts";
import {startingDockerComposeEnvironment_} from "../starting-Docker-Compose-environment/module.ts";
import type {executor_} from "./executor/module.ts";
import type {StartedDockerComposeEnvironment} from "testcontainers";
export async function use<Result>(
	executor: executor_.Executor<Result>,
): Promise<Result> {
	const environment =
		(await startingDockerComposeEnvironment_.start()) satisfies StartedDockerComposeEnvironment;
	try {
		const containers =
			containersOfDockerComposeEnvironment_.extracting_.extract(
				environment,
			) satisfies containersOfDockerComposeEnvironment_.Containers;
		const result = (await executor(containers)) satisfies Result;
		return result;
	} finally {
		await environment.down();
	}
}
