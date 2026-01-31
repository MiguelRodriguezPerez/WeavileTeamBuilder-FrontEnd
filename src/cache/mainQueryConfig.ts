import { QueryClient } from "@tanstack/react-query";
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const globalQueryClient = new QueryClient({
    defaultOptions: {
        queries : {
            staleTime : Infinity,
            gcTime: Infinity
        }
    },
    
});


export const globalQueryPersister = createAsyncStoragePersister({
  storage: AsyncStorage,
})