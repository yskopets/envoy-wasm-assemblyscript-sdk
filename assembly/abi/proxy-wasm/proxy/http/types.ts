/** 
 * Return codes for encode/decode headers filter invocations.
 * The connection manager bases further filter invocations on the return code of the previous filter. */
export const enum FilterHeadersStatus {
    /** 
     * Continue filter chain iteration.
     */
    Continue = 0,
    /** 
     * Do not iterate to any of the remaining filters in the chain. Returning
     * FilterDataStatus::Continue from decodeData()/encodeData() or calling
     * continueDecoding()/continueEncoding() MUST be called if continued filter iteration is desired.
     */
    StopIteration = 1,
}

/**
 * Return codes for encode/decode data filter invocations.
 * The connection manager bases further filter invocations on the return code of the previous filter.
 */
export const enum FilterDataStatus {
    /** 
     * Continue filter chain iteration. If headers have not yet been sent to the next filter, they
     * will be sent first via decodeHeaders()/encodeHeaders(). If data has previously been buffered,
     * the data in this callback will be added to the buffer before the entirety is sent to the next
     * filter.
     */
    Continue = 0,
    /**
     * Do not iterate to any of the remaining filters in the chain, and buffer body data for later
     * dispatching. Returning FilterDataStatus::Continue from decodeData()/encodeData() or calling
     * continueDecoding()/continueEncoding() MUST be called if continued filter iteration is desired.
     * 
     * This should be called by filters which must parse a larger block of the incoming data before
     * continuing processing and so can not push back on streaming data via watermarks.
     * 
     * If buffering the request causes buffered data to exceed the configured buffer limit, a 413 will
     * be sent to the user. On the response path exceeding buffer limits will result in a 500.     */
    StopIterationAndBuffer = 1,
    /**
     * Do not iterate to any of the remaining filters in the chain, and buffer body data for later
     * dispatching. Returning FilterDataStatus::Continue from decodeData()/encodeData() or calling
     * continueDecoding()/continueEncoding() MUST be called if continued filter iteration is desired.
     * 
     * This will cause the flow of incoming data to cease until one of the continue.*() functions is
     * called.
     * 
     * This should be returned by filters which can nominally stream data but have a transient back-up
     * such as the configured delay of the fault filter, or if the router filter is still fetching an
     * upstream connection.
     */
    StopIterationAndWatermark = 2,
    /**
     * Do not iterate to any of the remaining filters in the chain, but do not buffer any of the
     * body data for later dispatching. Returning FilterDataStatus::Continue from
     * decodeData()/encodeData() or calling continueDecoding()/continueEncoding() MUST be called if
     * continued filter iteration is desired.
     */
    StopIterationNoBuffer = 3,
}

/**
 * Return codes for encode/decode trailers filter invocations.
 * The connection manager bases further filter invocations on the return code of the previous filter.
 */
export const enum FilterTrailersStatus {
    /**
     * Continue filter chain iteration.
     */
    Continue = 0,
    /**
     * Do not iterate to any of the remaining filters in the chain. Calling
     * continueDecoding()/continueEncoding() MUST be called if continued filter iteration is desired.
     */
    StopIteration = 1,
}

/**
 * Return codes for encode metadata filter invocations.
 * Metadata currently can not stop filter 
;;; iteration.
 */
export const enum FilterMetadataStatus {
    /**
     * Continue filter chain iteration.
     */
    Continue = 0,
}

/**
 * Well-known HTTP status.
 */
export type HttpStatus = u32;
