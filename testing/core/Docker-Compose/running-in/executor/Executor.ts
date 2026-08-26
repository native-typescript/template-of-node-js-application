import type {containers_} from "../../containers/module.ts";
export type Executor = (containers: containers_.Containers) => Promise<void>;
