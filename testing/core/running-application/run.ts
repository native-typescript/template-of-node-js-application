import type {source_} from "../../../source/module.ts";
import {
	type StartedTestContainer,
	type TestContainer,
	Wait,
} from "testcontainers";
import type {z} from "zod";
export async function run(
	dockerImageOfApplication: TestContainer,
	numberOfPortOfBindOfServer: number,
): Promise<StartedTestContainer> {
	const container = (await dockerImageOfApplication
		.withAutoRemove(true)
		.withEnvironment(
			{} satisfies z.input<
				typeof source_.core_.environment_.configuration_.schemaForProcessEnv_.schema
			>,
		)
		.withExposedPorts(numberOfPortOfBindOfServer)
		.withStartupTimeout(600000)
		.withWaitStrategy(Wait.forListeningPorts())
		.start()) satisfies StartedTestContainer;
	return container;
}
