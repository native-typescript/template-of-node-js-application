import type {fields_} from "./fields/module.ts";
export interface DockerImage {
	readonly debian: fields_.debian_.Debian;
	readonly nodeJs: fields_.nodeJs_.NodeJs;
}
