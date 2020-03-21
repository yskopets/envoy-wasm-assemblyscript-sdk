import { ContextId } from "../../context/types";
import { FilterStatus, PeerType } from "./types";

export declare function proxy_on_new_connection(
    context_id: ContextId,
): FilterStatus;

export declare function proxy_on_downstream_data(
    context_id: ContextId,
    buffer_len: usize,
    end_of_stream: bool,
): FilterStatus;

export declare function proxy_on_upstream_data(
    context_id: ContextId,
    buffer_len: usize,
    end_of_stream: bool,
): FilterStatus;

export declare function proxy_on_downstream_connection_close(
    context_id: ContextId,
    peer: PeerType,
): void;

export declare function proxy_on_upstream_connection_close(
    context_id: ContextId,
    peer: PeerType,
): void;
