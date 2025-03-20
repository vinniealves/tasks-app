
import axios, { AxiosResponse } from "axios";
import { HttpResponse } from "./HttpResponse";
import IHttp from "./http.interface";

const HttpService = (): IHttp => {
    return {
        get: async <T>(url: string): Promise<HttpResponse<T>> => {
            return axios.get(url).then((response) => handleResponse<T>(response)).catch(error => handleError(error));
        },
        delete: async <T>(url: string): Promise<HttpResponse<T>> => {
            return axios.delete(url).then((response) => handleResponse<T>(response)).catch(error => handleError(error))
        },
        post: async <T>(url: string, data: Partial<T>): Promise<HttpResponse<T>> => {
            return axios.post(url, data).then((response) => handleResponse<T>(response)).catch(error => handleError(error))
        },
        put: async <T>(url: string, data: Partial<T>): Promise<HttpResponse<T>> => {
            return axios.put(url, data).then((response) => handleResponse<T>(response)).catch(error => handleError(error))
        },
    }
};

const handleHeaders = () => {

}

const handleResponse = <T>(response: AxiosResponse): HttpResponse<T> => {
    return {
        status: response.status === 200 || response.status === 201,
        data: response.data
    };
};

const handleError = <T>(error: any): HttpResponse<T> => {
    // tratar os erros depois com o error.status
    // return {
    //     status: response.status === 200 || response.status === 201,
    //     data: response.data
    // };
    throw new Error(error.message || "Ocorreu um problema")
}

export default HttpService;