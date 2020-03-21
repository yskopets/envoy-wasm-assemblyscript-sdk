import { char, ptr } from "../../types/common";
import { WasmResult } from "../../types/result";
import { BufferType, BufferFlags } from "./types";

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_get_buffer_bytes")
export declare function proxy_get_buffer_bytes(
    type: BufferType,
    start: usize,
    length: usize,
    value: ptr<ptr<char>>,
    value_len: ptr<usize>,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_get_buffer_status")
export declare function proxy_get_buffer_status(
    type: BufferType,
    length: ptr<usize>,
    flags: ptr<BufferFlags>,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_set_buffer_bytes")
export declare function proxy_set_buffer_bytes(
    type: BufferType,
    start: usize,
    length: usize,
    flags: ptr<BufferFlags>,
    value: ptr<char>,
    value_len: usize,
): WasmResult;
