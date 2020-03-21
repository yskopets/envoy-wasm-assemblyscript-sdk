
import { ptr } from "../types/common";
import { WasmResult } from "../types/result";
import { Timestamp } from "./types";

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_get_current_time_nanoseconds")
export declare function proxy_get_current_time_nanoseconds(
    time: ptr<Timestamp>,
): WasmResult;
