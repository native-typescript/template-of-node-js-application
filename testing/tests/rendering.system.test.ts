import {dockerImageOfApplication} from "../instances/index.ts";
import {expect} from "expect";
import type {Readable} from "node:stream";
import {describe, test} from "node:test";
import {type StartedTestContainer, Wait} from "testcontainers";
await describe(`Rendering`, async function executeTests(): Promise<void> {
	await test(`The built image is runnable`, async function executeTest(): Promise<void> {
		const chunks: string[] = [];
		const container: StartedTestContainer = await dockerImageOfApplication
			.withDefaultLogDriver()
			.withWaitStrategy(Wait.forLogMessage(`Hello world!`))
			.withLogConsumer(function consumeLogStream(stream: Readable) {
				stream.on(`data`, function consumeData(chunk: unknown) {
					switch (typeof chunk) {
						case `string`: {
							chunks.push(chunk);
							return;
						}
						default: {
							const error: Error = new Error(
								`Unexpected chunk type: ${typeof chunk}`,
							);
							throw error;
						}
					}
				});
				return;
			})
			.start();
		await container.stop();
		expect(chunks).toContain(`Hello world!
`);
		return;
	});
	return;
});
