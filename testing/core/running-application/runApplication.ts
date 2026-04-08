import type {schemaForProcessEnvOfSource} from "../../../source/index.ts";
import {
	type StartedTestContainer,
	type TestContainer,
	Wait,
} from "testcontainers";
import type {z} from "zod";
export async function runApplication(
	dockerImageOfApplication: TestContainer,
): Promise<StartedTestContainer> {
	const container: StartedTestContainer = await dockerImageOfApplication
		.withAutoRemove(true)
		.withEnvironment({} satisfies z.input<typeof schemaForProcessEnvOfSource>)
		.withStartupTimeout(600000)
		.withWaitStrategy(Wait.forListeningPorts())
		.start();
	return container;
}
