import {core_} from "../../core/module.ts";
import {buildArgs_} from "./build-args/module.ts";
import type {TestContainer} from "testcontainers";
export const dockerImage = (await core_.docker_.buildingImage_.build(
	buildArgs_.buildArgs,
)) satisfies TestContainer;
