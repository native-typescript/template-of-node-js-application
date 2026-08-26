import {
	DockerComposeEnvironment,
	type StartedDockerComposeEnvironment,
} from "testcontainers";
export async function start(): Promise<StartedDockerComposeEnvironment> {
	const environment = new DockerComposeEnvironment(`./testing`, [
		`docker-compose.yaml`,
	]);
	const startedEnvironment =
		(await environment.up()) satisfies StartedDockerComposeEnvironment;
	return startedEnvironment;
}
