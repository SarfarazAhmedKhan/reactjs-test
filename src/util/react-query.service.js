import { PAGINATION_CONSTANT } from "../constants/constant";

const getNextPageParam = (lastPage, allPages) => {
    return lastPage?.filteredCount / PAGINATION_CONSTANT.PAGE_SIZE > allPages?.length ? allPages.length : undefined;
};

const createPagination = (pageParam) => {
    return { offset: pageParam * PAGINATION_CONSTANT.PAGE_SIZE, count: PAGINATION_CONSTANT.PAGE_SIZE };
};

export { getNextPageParam, createPagination };
