
import { char, ptr } from "../../types/common";
import { WasmResult } from "../../types/result";
import { GrpcStatus } from "../../types/grpc";
import { HttpStatus } from "./types";

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_continue_request")
export declare function proxy_continue_request(
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_continue_response")
export declare function proxy_continue_response(
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_send_local_response")
export declare function proxy_send_local_response(
    response_code: HttpStatus,
    response_code_details: ptr<char>,
    response_code_details_len: usize,
    body: ptr<char>,
    body_len: usize,
    additional_response_header_pairs: ptr<char>,
    additional_response_header_pairs_len: usize,
    grpc_status: GrpcStatus,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_clear_route_cache")
export declare function proxy_clear_route_cache(
): WasmResult;
