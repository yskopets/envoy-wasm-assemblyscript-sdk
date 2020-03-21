import { ContextId } from "../context/types";
import { OnStartResult, OnValidateResult, OnConfigureResult, OnDoneResult } from "./types";

export declare function proxy_on_vm_start(
    root_context_id: ContextId,
    config_len: usize,
): OnStartResult;

export declare function proxy_validate_configuration(
    root_context_id: ContextId,
    config_len: usize,
): OnValidateResult;

export declare function proxy_on_configure(
    root_context_id: ContextId,
    config_len: usize,
): OnConfigureResult;

export declare function proxy_on_context_create(
    context_id: ContextId,
    root_context_id: ContextId,
): void;

export declare function proxy_on_done(
    context_id: ContextId,
): OnDoneResult;

export declare function proxy_on_log(
    context_id: ContextId,
): void;

export declare function proxy_on_delete(
    context_id: ContextId,
): void;
