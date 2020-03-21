import { char, ptr } from "../types/common";
import { WasmResult } from "../types/result";

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_get_configuration")
export declare function proxy_get_configuration(
    config: ptr<ptr<char>>,
    config_len: ptr<usize>,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_get_status")
export declare function proxy_get_status(
    code: ptr<WasmResult>,
    message: ptr<ptr<char>>,
    message_len: ptr<usize>,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_done")
export declare function proxy_done(
): WasmResult;
