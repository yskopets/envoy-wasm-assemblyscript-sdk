import { ContextId } from "../../context/types";
import { RequestHandle } from "./types";

export declare function proxy_on_http_call_response(
    context_id: ContextId,
    request_handle: RequestHandle,
    headers_count: usize,
    body_len: usize,
    trailers_count: usize,
): void;
