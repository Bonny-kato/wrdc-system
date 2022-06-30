import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
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
import EditForm from "./forms/edit-form";
import Login from "./Pages/login";
import RequireAuth from "./auth/RequireAuth";
import {AuthProvider} from "./provider/auth";
import CitizenDetails from "./Pages/citizen/all/citizens-details";
import Houses from "./Pages/house";

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>

            <Provider store={store}>
                <BrowserRouter>
                    <AuthProvider>
                        <Routes>
                            <Route path={'/login'} exact element={<Login/>}/>
                            <Route path={'/*'} exact element={
                                <RequireAuth>
                                    <GlobalContextProvider>
                                        <Routes>
                                            <Route path={'/'} exact element={<Dashboard/>}/>
                                            <Route path={'/houses'} exact element={<Houses/>}/>
                                            <Route path={'/citizen/:citizenId'} exact element={<CitizenDetails/>}/>
                                            <Route path={'/citizen-registration'} exact
                                                   element={<CitizenRegistration/>}/>
                                            <Route path={'/citizens'} exact element={<Citizens/>}/>
                                            <Route path={'/statistics/children'} exact element={<Children/>}/>
                                            <Route path={'/statistics/youth'} exact element={<Youth/>}/>
                                            <Route path={'/citizen/edit/:citizenId'} exact element={<EditForm/>}/>
                                            <Route path={'/statistics/elders'} exact element={<Elders/>}/>
                                        </Routes>
                                    </GlobalContextProvider>
                                </RequireAuth>
                            }/>
                        </Routes>
                    </AuthProvider>
                </BrowserRouter>
            </Provider>


            <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}/>
        </QueryClientProvider>
    );
}

export default App;
