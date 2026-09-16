import type {source_} from "../../../../source/module.ts";
import {
	type StartedTestContainer,
	type TestContainer,
	Wait,
} from "testcontainers";
export async function run(
	dockerImageOfApplication: TestContainer,
	numberOfPortOfBindOfServer: number,
): Promise<StartedTestContainer> {
	const container = (await dockerImageOfApplication
		.withAutoRemove(true)
		.withEnvironment(
			{} satisfies typeof source_.core_.environment_.configuration_.schemaForProcessEnv_.schema.inferIn,
		)
		.withExposedPorts(numberOfPortOfBindOfServer)
		.withStartupTimeout(600000)
		.withWaitStrategy(Wait.forListeningPorts())
		.start()) satisfies StartedTestContainer;
	return container;
}
