import { useQuery } from "react-query";
import { request } from "../API/index";
import { API_CONFIG, API_ROUTES } from "./apiConfig";
import { STORAGE_KEY } from "../constants/Storage";

export function useGetUsersOnboardedData() {
    return useQuery(
        STORAGE_KEY.USERS_ONBOARDED,
        async () => {
            const { data } = await request({
                url: API_ROUTES.USER.GET_USERS_ONBOARDED_FOR_GRAPH,
                method: API_CONFIG.GET,
                params: {}
            });
            return data;
        },
        { keepPreviousData: true, staleTime: Infinity }
    );
}

export function useGetDocumentsData() {
    return useQuery(
        STORAGE_KEY.DOCUMENTS_GRAPH,
        async () => {
            const { data } = await request({
                url: API_ROUTES.DOCUMENTS.GET_DOCUMENTS_FOR_GRAPH,
                method: API_CONFIG.GET,
                params: {}
            });
            return data;
        },
        { keepPreviousData: true, staleTime: Infinity }
    );
}

export function useGetRidesData() {
    return useQuery(
        STORAGE_KEY.RIDES_GRAPH,
        async () => {
            const { data } = await request({
                url: API_ROUTES.SCHEDULE.GET_RIDES_FOR_GRAPH,
                method: API_CONFIG.GET,
                params: {}
            });
            return data;
        },
        { keepPreviousData: true, staleTime: Infinity }
    );
}

export function useSharersEarningData() {
    return useQuery(
        STORAGE_KEY.SHARERS_EARNINGS,
        async () => {
            const { data } = await request({
                url: API_ROUTES.TRANSACTION.GET_SHARERS_EARNINGS_FOR_GRAPH,
                method: API_CONFIG.GET,
                params: {}
            });
            return data;
        },
        { keepPreviousData: true, staleTime: Infinity }
    );
}