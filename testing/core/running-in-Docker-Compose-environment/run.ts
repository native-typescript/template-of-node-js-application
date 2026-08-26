import {containersOfDockerComposeEnvironment_} from "../containers-of-Docker-Compose-environment/module.ts";
import {startingDockerComposeEnvironment_} from "../starting-Docker-Compose-environment/module.ts";
import type {executor_} from "./executor/module.ts";
import type {StartedDockerComposeEnvironment} from "testcontainers";
export async function run(executor: executor_.Executor): Promise<void> {
	const environment =
		(await startingDockerComposeEnvironment_.start()) satisfies StartedDockerComposeEnvironment;
	try {
		const containers =
			containersOfDockerComposeEnvironment_.extracting_.extract(
				environment,
			) satisfies containersOfDockerComposeEnvironment_.Containers;
		await executor(containers);
		return;
	} finally {
		await environment.down();
	}
}
