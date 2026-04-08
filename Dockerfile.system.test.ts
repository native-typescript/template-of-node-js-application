import {dockerImageOfApplication} from "./testing/index.ts";
import {describe, test} from "node:test";
import type {StartedTestContainer} from "testcontainers";
await describe(`Docker image`, async function executeTests(): Promise<void> {
	await test(`The built image is runnable`, async function executeTest(): Promise<void> {
		const container: StartedTestContainer =
			await dockerImageOfApplication.start();
		await container.stop();
		return;
	});
	return;
});
