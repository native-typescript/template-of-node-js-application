import type {containersOfDockerComposeEnvironment_} from "../../containers-of-Docker-Compose-environment/module.ts";
export type Executor = (
	containers: containersOfDockerComposeEnvironment_.Containers,
) => Promise<void>;
