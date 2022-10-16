import { useMutation, useQuery } from "react-query";
import { request } from "../API/index";
import { API_CONFIG, API_ROUTES } from "./apiConfig";
import { STORAGE_KEY } from "../constants/Storage";

export function useGetCoupenListing(params) {
    return useQuery(
        [STORAGE_KEY.COUPEN_LISTING, params],
        async () => {
            const { data } = await request({
                url: API_ROUTES.COUPEN.GET_COUPEN_LISTING,
                method: API_CONFIG.POST,
                params
            });
            return data;
        },
        { keepPreviousData: true, staleTime: Infinity }
    );
}

export function useCreateCoupen(options) {
    return useMutation(async (params) => {
        const { data } = await request({
            url: API_ROUTES.COUPEN.ADD_UPDATE_COUPEN,
            method: API_CONFIG.POST,
            params: params
        });
        return data;
    }, options);
}
