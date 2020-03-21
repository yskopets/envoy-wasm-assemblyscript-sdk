/** 
 * Type of payload in a buffer.
 */
export const enum BufferType {
    /** Request body of a proxied HTTP request. */
    HttpRequestBody = 0,
    /** Response body of a proxied HTTP request. */
    HttpResponseBody = 1,
    /** Request payload of a proxied L4 connection. */
    NetworkDownstreamData = 2,
    /** Response payload of a proxied L4 connection. */
    NetworkUpstreamData = 3,
    /** Response body of an outgoing HTTP request. */
    HttpCallResponseBody = 4,
    /** Response payload of an outgoing gRPC call. */
    GrpcReceiveBuffer = 5,
}

/** 
 * Buffer flags.
 */
export const enum BufferFlags {
    /** End of stream has been reached. */
    EndOfStream = 1,
}
