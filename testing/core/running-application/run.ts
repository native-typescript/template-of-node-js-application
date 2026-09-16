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
		.withEnvironment({
			ADAPTER__NAME: `Node`,
			ADAPTER__SERVER__BIND__ADDRESS: `::`,
			ADAPTER__SERVER__BIND__PORT__NUMBER:
				numberOfPortOfBindOfServer.toString(10),
			ADAPTER__SERVER__BIND__PORT__TLS__IS_ENABLED: `no`,
			ADAPTER__SERVER__IS_ENABLED: `yes`,
			ADAPTER__SHOULD_BE_USED: `yes`,
			MODE_OF_OPERATION: `dynamic`,
		} satisfies z.input<
			typeof source_.core_.environment_.configuration_.schemaForProcessEnv_.schema
		>)
		.withExposedPorts(numberOfPortOfBindOfServer)
		.withStartupTimeout(600000)
		.withWaitStrategy(Wait.forListeningPorts())
		.start()) satisfies StartedTestContainer;
	return container;
}
