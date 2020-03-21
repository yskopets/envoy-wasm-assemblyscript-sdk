import { ContextId } from "../../context/types";
import { GrpcStatus } from "../../types/grpc";
import { CallHandle } from "./types";

export declare function proxy_on_grpc_create_initial_metadata(
    context_id: ContextId,
    call_handle: CallHandle,
    headers_count: usize,
): void;

export declare function proxy_on_grpc_receive_initial_metadata(
    context_id: ContextId,
    call_handle: CallHandle,
    headers_count: usize,
): void;

export declare function proxy_on_grpc_trailing_metadata(
    context_id: ContextId,
    call_handle: CallHandle,
    trailers_count: usize,
): void;

export declare function proxy_on_grpc_receive(
    context_id: ContextId,
    call_handle: CallHandle,
    response_len: usize,
): void;

export declare function proxy_on_grpc_close(
    context_id: ContextId,
    call_handle: CallHandle,
    status_code: GrpcStatus,
): void;
