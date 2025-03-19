import { HttpResponse } from "@/src/infrastructure/http/HttpResponse"
import { useState } from "react"

export enum FetchTypes {
    FETCH = 'FETCH',
    REFRESH = 'REFRESH',
    SUBMIT = 'SUBMIT'
}

type FetchType = keyof typeof FetchTypes

interface IFetch {
    handleFetch: <T>(promise: Promise<HttpResponse<T>>, type?: FetchType) => Promise<T | null>
    loading: boolean
    submitting: boolean
    refreshing: boolean
}

const useFetch = (): IFetch => {
    const [loading, setLoading] = useState<boolean>(false)
    const [refreshing, setRefreshing] = useState<boolean>(false)
    const [submitting, setSubmitting] = useState<boolean>(false)

    const handleFetch = async <T>(promise: Promise<HttpResponse<T>>, type?: FetchType): Promise<T | null> => {
        try {
            setLoading(type === FetchTypes.FETCH)
            setRefreshing(type === FetchTypes.REFRESH)
            setSubmitting(type === FetchTypes.SUBMIT)

            let data: T | null = null
            const res = await promise
            if (res.status) {
                data = res.data || null
            }
            return data
        } catch (error: any) {
            alert(error.message)
            return null
        } finally {
            setLoading(false)
            setSubmitting(false)
            setRefreshing(false)
        }
    }

    return { handleFetch, loading, submitting, refreshing }
}

export default useFetch
