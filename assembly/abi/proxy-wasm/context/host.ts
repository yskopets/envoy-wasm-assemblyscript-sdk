import { WasmResult } from "../types/result";
import { ContextId } from "./types";

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_set_effective_context")
export declare function proxy_set_effective_context(
    context_id: ContextId,
): WasmResult;
