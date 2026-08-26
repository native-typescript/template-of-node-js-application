import type {containers_} from "../../containers/module.ts";
export type Executor<Result> = (
	containers: containers_.Containers,
) => Promise<Result>;
