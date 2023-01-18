import './App.css';
import {useContext} from "react";
import {Navigate, Route, Routes} from "react-router-dom"
import MainFullPage from "./components/FullMainPage/MainFullPage";
import {AuthContext} from "./context/AuthContext";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
function App() {
    const {currentUser} = useContext(AuthContext)
    const ProtectedRoute = ({children}) => {
        if (!currentUser) {
            return <Navigate to={"/login"}/>
        }
        return children;
    }

    return (
        <div className="App">
            <Routes>
                <Route index element={
                    <ProtectedRoute>
                        <MainFullPage/>
                    </ProtectedRoute>}/>
                <Route path='login' element=<Login/>/>
                <Route path='signin' element=<Registration/>/>
            </Routes>
        </div>

    );
}

export default App;
