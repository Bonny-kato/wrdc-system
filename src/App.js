import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Dashboard from "./Pages/dashboard";
import store from './Store'
import {Provider} from "react-redux";
import CitizenRegistration from "./Pages/registration";
import Citizens from "./Pages/citizen/all";
import Children from "./Pages/citizen/children";
import Youth from "./Pages/citizen/youth";
import Elders from "./Pages/citizen/elders";
import {ReactQueryDevtools} from "react-query/devtools";
import {QueryClientProvider, QueryClient} from 'react-query'
import GlobalContextProvider from "./context/global-context";

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalContextProvider>
                <Provider store={store}>
                    <Router>
                        <Routes>
                            <Route path={'/'} exact element={<Dashboard/>}/>
                            <Route path={'/citizen-registration'} exact element={<CitizenRegistration/>}/>
                            <Route path={'/citizens'} exact element={<Citizens/>}/>
                            <Route path={'/statistics/children'} exact element={<Children/>}/>
                            <Route path={'/statistics/youth'} exact element={<Youth/>}/>
                            <Route path={'/statistics/elders'} exact element={<Elders/>}/>
                        </Routes>
                    </Router>
                </Provider>
            </GlobalContextProvider>
            <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}/>
        </QueryClientProvider>
    );
}

export default App;
