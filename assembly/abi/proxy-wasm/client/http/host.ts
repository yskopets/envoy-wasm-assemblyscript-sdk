import { char, ptr } from "../../types/common";
import { WasmResult } from "../../types/result";
import { RequestHandle } from "./types";

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_http_call")
export declare function proxy_http_call(
    uri: ptr<char>,
    uri_len: usize,
    header_pairs: ptr<char>,
    header_pairs_len: usize,
    body: ptr<char>,
    body_len: usize,
    trailer_pairs: ptr<char>,
    trailer_pairs_len: usize,
    timeout_ms: u32,
    request_handle: ptr<RequestHandle>,
): WasmResult;
