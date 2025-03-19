import { HttpResponse } from "../http/HttpResponse";

export default interface IHttp {
    get: <T>(url: string) => Promise<HttpResponse<T>>;
    post: <T>(url: string, data: Partial<T>) => Promise<HttpResponse<T>>;
    put: <T>(url: string, data: Partial<T>) => Promise<HttpResponse<T>>;
    delete: <T>(url: string) => Promise<HttpResponse<T>>;
}