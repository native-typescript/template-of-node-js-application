import {testing_} from "./testing/module.ts";
import {describe, test} from "node:test";
import type {StartedTestContainer} from "testcontainers";
await describe(`Docker image`, async function executeTests(): Promise<void> {
	await test(`The built image is runnable`, async function executeTest(): Promise<void> {
		const container =
			(await testing_.instances_.dockerImageOfApplication_.dockerImage.start()) satisfies StartedTestContainer;
		await container.stop();
		return;
	});
	return;
});
