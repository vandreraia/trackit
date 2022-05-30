import { BrowserRouter, Route, Routes } from "react-router-dom";
import Habit from "./Components/Habit/Habit";
import Login from "./Components/Login";
import Register from "./Components/Register";
import History from "./Components/History";
import Today from "./Components/Today/Today";
import ImageContext from "./contexts/ImageContext";
import TokenContext from "./contexts/TokenContext";
import { useState } from "react";


export default function App() {
    const [userImage, setUserImage] = useState([]);
    const contextImage = { userImage, setUserImage };
    const [token, setToken] = useState()
    const tokenContext = { token, setToken };


    return (
        <BrowserRouter>
                <ImageContext.Provider value={contextImage}>
                            <TokenContext.Provider value={tokenContext}>
                                <Routes>
                                    <Route path="/" element={<Login />} />
                                    <Route path="/habit" element={<Habit />} />
                                    <Route path="/register" element={<Register />} />
                                    <Route path="/history" element={<History />} />
                                    <Route path="/today" element={<Today />} />
                                </Routes>
                            </TokenContext.Provider>
                </ImageContext.Provider>
        </BrowserRouter>
    )
}