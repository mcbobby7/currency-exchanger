// enum AllowedMethods {
//     "post", "POST", "get", "GET", "put", "PUT"
// }
enum AllowedMethods {
    "GET"
}
export type Body = string | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream<Uint8Array> | null | undefined;
export type Method = keyof typeof AllowedMethods;
export type _Headers = Headers | string[][] | Record<string, string> | any | undefined