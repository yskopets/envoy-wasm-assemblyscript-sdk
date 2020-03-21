/**
 * Status codes returned by filters that can cause future filters to not get iterated to.
 */
export const enum FilterStatus {
    /** Continue to further filters. */
    Continue = 0,
    /** Stop executing further filters. */
    StopIteration = 1,
}

/**
 * Peer type.
 */
export const enum PeerType {
    /** Unknown. */
    Unknown = 0,
    /** Local. */
    Local = 1,
    /** Remote. */
    Remote = 2,
}