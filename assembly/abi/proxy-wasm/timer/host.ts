import { WasmResult } from "../types/result";

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_set_tick_period_milliseconds")
export declare function proxy_set_tick_period_milliseconds(
    period_ms: u32,
): WasmResult;
