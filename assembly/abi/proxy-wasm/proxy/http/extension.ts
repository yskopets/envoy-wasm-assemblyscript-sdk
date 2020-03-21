import { ContextId } from "../../context/types";
import { FilterHeadersStatus, FilterDataStatus, FilterTrailersStatus, FilterMetadataStatus } from "./types";

export declare function proxy_on_request_headers(
    context_id: ContextId,
    headers_count: usize,
): FilterHeadersStatus;

export declare function proxy_on_request_body(
    context_id: ContextId,
    buffer_len: usize,
    end_of_stream: bool,
): FilterDataStatus;

export declare function proxy_on_request_trailers(
    context_id: ContextId,
    trailers_count: usize,
): FilterTrailersStatus;

export declare function proxy_on_request_metadata(
    context_id: ContextId,
    elements_count: usize,
): FilterMetadataStatus;

export declare function proxy_on_response_headers(
    context_id: ContextId,
    headers_count: usize,
): FilterHeadersStatus;

export declare function proxy_on_response_body(
    context_id: ContextId,
    buffer_len: usize,
    end_of_stream: bool,
): FilterDataStatus;

export declare function proxy_on_response_trailers(
    context_id: ContextId,
    trailers_count: usize,
): FilterTrailersStatus;

export declare function proxy_on_response_metadata(
    context_id: ContextId,
    elements_count: usize,
): FilterMetadataStatus;
