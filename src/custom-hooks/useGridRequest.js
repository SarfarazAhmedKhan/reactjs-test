import { useState } from "react";
const useGridRequest = (props) => {
    const INITIAL_VALUES = {
        Offset: 0,
        Count: 30,
        SearchBy: props?.SearchBy ?? "",
        sort: props?.sort ?? { name: "", orderBy: "" },
        filters: props?.filters ?? [],
        fromDate: props?.fromDate ?? null,
        toDate: props?.toDate ?? null,
        Direction: props?.Direction ?? "ASC",
        Column: props?.Column ?? null
    };
    const [gridRequest, setGridRequest] = useState(INITIAL_VALUES);

    const onSearch = (searchValue) => {
        const request = { ...gridRequest, SearchBy: searchValue };
        request.Offset = 0;
        setGridRequest(request);
    };

    const onDateSearch = (fromDate, toDate) => {
        const request = { ...gridRequest, fromDate: fromDate, toDate: toDate };
        setGridRequest(request);
    };

    const onPagination = (Offset, Count) => {
        const request = { ...gridRequest, Offset: Offset, Count: Count };
        console.log("view count", request);
        setGridRequest({
            ...request
        });
    };

    const onSort = (columName, orderBy) => {
        const request = { ...gridRequest, sort: { name: columName, orderBy: orderBy } };
        request.Offset = 0;
        setGridRequest(request);
    };

    const clearSort = () => {
        const request = { ...gridRequest, sort: { name: "", orderBy: "" } };
        request.Offset = 0;
        setGridRequest(request);
    };

    const onFilter = (key, value, optionalPayload = {}) => {
        let request = { ...gridRequest, ...optionalPayload };
        request[key] = value;
        request.Offset = 0;
        setGridRequest(request);
    };

    const clearFilters = () => {
        const request = { ...gridRequest, filters: [] };
        request.Offset = 0;
        setGridRequest(request);
    };

    const resetPayload = () => {
        const request = { ...gridRequest, ...INITIAL_VALUES };
        setGridRequest(request);
    };

    return {
        gridRequest,
        onSearch,
        onFilter,
        onPagination,
        onSort,
        clearFilters,
        clearSort,
        resetPayload,
        onDateSearch
    };
};

export default useGridRequest;
