import { char, ptr } from "../types/common";
import { WasmResult } from "../types/result";
import { LogLevel } from "./types";

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_log")
export declare function proxy_log(
    level: LogLevel,
    message: ptr<char>,
    message_len: usize,
): WasmResult;
