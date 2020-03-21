import { char, ptr } from "../../../../proxy-wasm/types/common";
import { WasmResult } from "../../../../proxy-wasm/types/result";
import { IoHandle } from "./types";

// @ts-ignore: decorator
@unsafe
@external("envoy.client.udp.v1alpha1", "open")
export declare function open(
    address: ptr<char>,
    address_len: usize,
    io_handle: ptr<IoHandle>,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("envoy.client.udp.v1alpha1", "send")
export declare function send(
    io_handle: IoHandle,
    message: ptr<char>,
    message_len: usize,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("envoy.client.udp.v1alpha1", "close")
export declare function close(
    io_handle: IoHandle,
): WasmResult;
