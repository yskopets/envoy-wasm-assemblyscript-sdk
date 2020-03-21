import { char, ptr } from "../../types/common";
import { WasmResult } from "../../types/result";
import { CallHandle } from "./types";

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_grpc_call")
export declare function proxy_grpc_call(
    service: ptr<char>,
    service_len: usize,
    service_name: ptr<char>,
    service_name_len: usize,
    method_name: ptr<char>,
    method_name_len: usize,
    request: ptr<char>,
    request_len: usize,
    timeout_ms: u32,
    call_handle: ptr<CallHandle>,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_grpc_stream")
export declare function proxy_grpc_stream(
    service: ptr<char>,
    service_len: usize,
    service_name: ptr<char>,
    service_name_len: usize,
    method_name: ptr<char>,
    method_name_len: usize,
    call_handle: ptr<CallHandle>,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_grpc_send")
export declare function proxy_grpc_send(
    call_handle: CallHandle,
    message: ptr<char>,
    message_len: usize,
    end_stream: bool,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_grpc_cancel")
export declare function proxy_grpc_cancel(
    call_handle: CallHandle,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_grpc_close")
export declare function proxy_grpc_close(
    call_handle: CallHandle,
): WasmResult;
