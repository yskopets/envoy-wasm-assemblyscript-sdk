import { char, ptr } from "../../types/common";
import { WasmResult } from "../../types/result";
import { HeadersType } from "./types";

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_add_header_map_value")
export declare function proxy_add_header_map_value(
    type: HeadersType,
    key: ptr<char>,
    key_len: usize,
    value: ptr<char>,
    value_len: usize,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_get_header_map_value")
export declare function proxy_get_header_map_value(
    type: HeadersType,
    key: ptr<char>,
    key_len: usize,
    value: ptr<ptr<char>>,
    value_len: ptr<usize>,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_get_header_map_pairs")
export declare function proxy_get_header_map_pairs(
    type: HeadersType,
    data: ptr<ptr<char>>,
    data_len: ptr<usize>,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_set_header_map_pairs")
export declare function proxy_set_header_map_pairs(
    type: HeadersType,
    data: ptr<char>,
    data_len: usize,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_replace_header_map_value")
export declare function proxy_replace_header_map_value(
    type: HeadersType,
    key: ptr<char>,
    key_len: usize,
    value: ptr<char>,
    value_len: usize,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_remove_header_map_value")
export declare function proxy_remove_header_map_value(
    type: HeadersType,
    key: ptr<char>,
    key_len: usize,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_get_header_map_size")
export declare function proxy_get_header_map_size(
    type: HeadersType,
    headers_count: ptr<usize>,
): WasmResult;
