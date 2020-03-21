/**
 * Error codes returned by ABI functions.
 */
export const enum WasmResult {
    /** No error occurred. ABI call completed successfully. */
    Ok = 0,
    /** The result could not be found, e.g. a provided key did not appear in a table. */
    NotFound,
    /** An argument was bad, e.g. did not conform to the required range. */
    BadArgument,
    /** A protobuf could not be serialized. */
    SerializationFailure,
    /** A protobuf could not be parsed. */
    ParseFailure,
    /** A provided expression (e.g. "foo.bar") was illegal or unrecognized. */
    BadExpression,
    /** A provided memory range was not legal. */
    InvalidMemoryAccess,
    /** Data was requested from an empty container. */
    Empty,
    /** The provided CAS did not match that of the stored data. */
    CasMismatch,
    /** Returned result was unexpected, e.g. of the incorrect size. */
    ResultMismatch,
    /** Internal failure: trying check logs of the surrounding system. */
    InternalFailure,
    /** The connection/stream/pipe was broken/closed unexpectedly. */
    BrokenConnection,
}
