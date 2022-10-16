import { useQuery } from "react-query";
import { request } from "../API/index";
import { API_CONFIG, API_ROUTES } from "./apiConfig";
import { STORAGE_KEY } from "../constants/Storage";

export function useGetUsersListings(params) {
    return useQuery(
        [STORAGE_KEY.USERS, params],
        async () => {
            const { offset } = params;
            let maxRecords = offset == 0 ? 10 : offset;
            console.log("offset", maxRecords, offset);
            const { data } = await request({
                url: API_ROUTES.USER_LIST.DETAILS,
                method: API_CONFIG.GET,
                params: { maxRecords }
            });
            return data;
        },
        { keepPreviousData: true, staleTime: Infinity }
    );
}