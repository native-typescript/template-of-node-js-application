import {regex, type} from "arktype";
export const schema = type(regex(`^(\\d+)\\.(\\d+)\\.(\\d+)$`, `u`));
