import { char, ptr } from "../../types/common";
import { WasmResult } from "../../types/result";
import { QueueHandle } from "./types";

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_register_shared_queue")
export declare function proxy_register_shared_queue(
    queue_name: ptr<char>,
    queue_name_len: usize,
    queue_handle: ptr<QueueHandle>,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_resolve_shared_queue")
export declare function proxy_resolve_shared_queue(
    vm_id: ptr<char>,
    vm_id_len: usize,
    queue_name: ptr<char>,
    queue_name_len: usize,
    queue_handle: ptr<QueueHandle>,
): WasmResult;


// @ts-ignore: decorator
@unsafe
@external("env", "proxy_enqueue_shared_queue")
export declare function proxy_enqueue_shared_queue(
    queue: QueueHandle,
    data: ptr<char>,
    data_len: usize,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_dequeue_shared_queue")
export declare function proxy_dequeue_shared_queue(
    queue: QueueHandle,
    data: ptr<ptr<char>>,
    data_len: ptr<usize>,
): WasmResult;
