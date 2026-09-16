import {core_} from "../../core/module.ts";
import {buildArgs_} from "./build-args/module.ts";
import type {TestContainer} from "testcontainers";
export const dockerImage = (await core_.buildingDockerImageOfApplication_.build(
	buildArgs_.buildArgs,
)) satisfies TestContainer;
