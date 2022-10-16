import { useQuery } from "react-query";
import { request } from "../API/index";
import { API_CONFIG, API_ROUTES } from "./apiConfig";
import { STORAGE_KEY } from "../constants/Storage";
import User from "../appRedux/slices/User";

export function useManageRidesListing(params) {
    return useQuery(
        [STORAGE_KEY.GET_MANAGE_RIDES, params],
        async () => {
            const { data } = await request({
                url: API_ROUTES.RIDE.GET_RIDES,
                method: API_CONFIG.POST,
                params
            });
            return data;
        },
        { keepPreviousData: true, staleTime: Infinity }
    );
}
