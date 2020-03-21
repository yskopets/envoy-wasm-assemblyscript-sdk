import { char, ptr } from "../types/common";
import { WasmResult } from "../types/result";

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_get_property")
export declare function proxy_get_property(
    path: ptr<char>,
    path_len: usize,
    value: ptr<ptr<char>>,
    value_len: ptr<usize>,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_set_property")
export declare function proxy_set_property(
    path: ptr<char>,
    path_len: usize,
    value: ptr<char>,
    value_len: usize,
): WasmResult;
