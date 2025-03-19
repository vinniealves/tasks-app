import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sessionReducer from './slices/sessionSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['session'], // Adicione os slices que você quer persistir
};

const rootReducer = combineReducers({
    session: sessionReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'], // Ignore ações do redux-persist
            },
        }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: { session: SessionState }
export type AppDispatch = typeof store.dispatch