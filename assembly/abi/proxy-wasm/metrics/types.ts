/** 
 * Metric type.
 */
export const enum MetricType {
    /** Counter. */
    Counter = 0,
    /** Gauge. */
    Gauge = 1,
    /** Histogram. */
    Histogram = 2,
}

/**
 * Opaque identifier of a metric.
 */
export type MetricHandle = u32;
