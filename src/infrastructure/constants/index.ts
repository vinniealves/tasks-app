import TEXTS from './texts'

// const API_BASE_URL = process.env.API_BASE_URL
// const API_BASE_URL = "http://localhost:3000"
const API_BASE_URL = "http://192.168.0.27:3000"

const ENDPOINTS = {
    TASKS: `${API_BASE_URL}/tasks`
}

export {
    API_BASE_URL,
    ENDPOINTS,
    TEXTS
}