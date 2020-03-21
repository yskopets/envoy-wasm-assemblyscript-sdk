/**
 * Type of a header map.
 */
export const enum HeadersType {
    /** Request headers of a proxied HTTP request. */
    RequestHeaders = 0,
    /** Request trailers of a proxied HTTP request. */
    RequestTrailers = 1,
    /** Response headers of a proxied HTTP request. */
    ResponseHeaders = 2,
    /** Response trailers of a proxied HTTP request. */
    ResponseTrailers = 3,
    /** Client's initial metadata of an outgoing gRPC call. */
    GrpcCreateInitialMetadata = 4,
    /** Server's initial metadata of an outgoing gRPC call. */
    GrpcReceiveInitialMetadata = 5,
    /** Server's trailing metadata of an outgoing gRPC call. */
    GrpcReceiveTrailingMetadata = 6,
    /** Response headers of an outgoing HTTP request. */
    HttpCallResponseHeaders = 7,
    /** Response trailers of an outgoing HTTP request. */
    HttpCallResponseTrailers = 8,
}
