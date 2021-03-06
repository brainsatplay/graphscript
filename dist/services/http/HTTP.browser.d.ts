import { Routes, Service, ServiceMessage } from "../Service";
export declare type RequestOptions = {
    method: string;
    url: string | URL;
    data?: Document | string | Blob | BufferSource | FormData | URLSearchParams;
    responseType?: XMLHttpRequestResponseType;
    mimeType?: string | undefined;
    onload?: (ev: any) => void;
    onprogress?: (ev: any) => void;
    onabort?: (ev: any) => void;
    onerror?: (er: any) => void;
    onloadend?: (ev: any) => void;
    user?: string;
    pass?: string;
};
export declare class HTTPfrontend extends Service {
    name: string;
    fetchProxied: boolean;
    listening: {};
    request: (options: RequestOptions) => XMLHttpRequest;
    get: (url?: string | URL, type?: XMLHttpRequestResponseType, mimeType?: string | undefined) => Promise<unknown>;
    post: (message: any | ServiceMessage, url?: string | URL, type?: XMLHttpRequestResponseType, mimeType?: string | undefined) => Promise<unknown>;
    transmit: (message: any | ServiceMessage, url: string | URL) => Promise<unknown>;
    transponder: (url: string | URL, message: any | ServiceMessage | undefined, type?: XMLHttpRequestResponseType, mimeType?: string) => Promise<unknown>;
    listen: (path?: string | undefined | 0, fetched?: (clone: Response, args: any[], response: Response) => Promise<void>) => void;
    stopListening: (path: string | 0 | undefined) => void;
    routes: Routes;
}
