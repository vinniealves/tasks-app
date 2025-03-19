export type HttpResponse<T> = {
    status: boolean
    data?: T
    message?: string
}