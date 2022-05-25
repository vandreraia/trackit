import { BrowserRouter, Route, Routes } from "react-router-dom";
import Habit from "./Components/Habit";
import Login from "./Components/Login";
import Register from "./Components/Register";
import History from "./Components/History";
import Today from "./Components/Today";
import ImageContext from "./contexts/ImageContext";
import { useState } from "react";


export default function App() {
	const [userImage, setUserImage] = useState([]);
    const contextImage = { userImage, setUserImage };


    return (
        <BrowserRouter>
            <ImageContext.Provider value={contextImage}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/habit" element={<Habit />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/today" element={<Today />} />
                </Routes>
            </ImageContext.Provider>
        </BrowserRouter>
    )
}