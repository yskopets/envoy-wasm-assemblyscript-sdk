import { char, ptr } from "../../types/common";
import { WasmResult } from "../../types/result";
import { CasOptions } from "./types";

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_get_shared_data")
export declare function proxy_get_shared_data(
    key: ptr<char>,
    key_len: usize,
    cas: ptr<CasOptions>,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_set_shared_data")
export declare function proxy_set_shared_data(
    key: ptr<char>,
    key_len: usize,
    value: ptr<char>,
    value_len: usize,
    cas: CasOptions,
): WasmResult;
