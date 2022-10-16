import "assets/vendors/style";
import { ConnectedRouter } from "connected-react-router";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import { Provider } from "react-redux";
import "assets/vendors/style";
import configureStore, { history } from "./appRedux/store";
import withClearCache from "./ClearCache";
import FullPageLoader from "./components/FullPageLoader";
import { getNextPageParam } from "./util/react-query.service";
import MainApp from "./containers/App/MainApp";
const store = configureStore();

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 30,
            refetchOnWindowFocus: false,
            retry: false,
            getNextPageParam: (lastPage, allPages) => getNextPageParam(lastPage, allPages)
        }
    }
});
const RegisterRoutes = () => {
    // if (isTokenExist) {
    if (true) {
        return <MainApp />;
    }
};

const App = () => (
    <React.Suspense fallback={<FullPageLoader />}>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ConnectedRouter history={history}>{RegisterRoutes()}</ConnectedRouter>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </Provider>
    </React.Suspense>
);

const ClearCacheComponent = withClearCache(App);

const NextApp = () => {
    return <ClearCacheComponent />;
};

export default NextApp;
