import {containers_} from "../containers/module.ts";
import {starting_} from "../starting/module.ts";
import type {executor_} from "./executor/module.ts";
import type {StartedDockerComposeEnvironment} from "testcontainers";
export async function use<Result>(
	executor: executor_.Executor<Result>,
): Promise<Result> {
	const environment =
		(await starting_.start()) satisfies StartedDockerComposeEnvironment;
	try {
		const containers = containers_.extracting_.extract(
			environment,
		) satisfies containers_.Containers;
		const result = (await executor(containers)) satisfies Result;
		return result;
	} finally {
		await environment.down();
	}
}
