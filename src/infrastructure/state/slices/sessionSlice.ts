import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Session {
    id: string;
    name: string;
    email: string;
}

type SessionState = {
    data: Session | null
}

const initialState: SessionState = {
    data: null
}

const todosSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        createSession: (state, action: PayloadAction<Session>) => {
            state.data = action.payload
        },
        updateSession: (state, action: PayloadAction<Session>) => {
            state.data = { ...state.data, ...action.payload }
        },
        destroySession: (state, action: PayloadAction<Session>) => {
            state = initialState
        },
    },
});

export const { createSession, updateSession, destroySession } = todosSlice.actions;
export default todosSlice.reducer;