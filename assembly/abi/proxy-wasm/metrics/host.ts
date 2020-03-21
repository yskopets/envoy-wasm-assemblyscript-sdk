import { char, ptr } from "../types/common";
import { WasmResult } from "../types/result";
import { MetricHandle, MetricType } from "./types";

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_define_metric")
export declare function proxy_define_metric(
    type: MetricType,
    name: ptr<char>,
    name_len: usize,
    handle: ptr<MetricHandle>,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_increment_metric")
export declare function proxy_increment_metric(
    metric: MetricHandle,
    offset: i64,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_record_metric")
export declare function proxy_record_metric(
    metric: MetricHandle,
    value: u64,
): WasmResult;

// @ts-ignore: decorator
@unsafe
@external("env", "proxy_get_metric")
export declare function proxy_get_metric(
    metric: MetricHandle,
    value: ptr<u64>,
): WasmResult;
