import { BrowserRouter, Route, Routes } from "react-router-dom"
import Habitos from "./Components/Habitos"
import Header from "./Components/Header"
import Login from "./Components/Login"
import Cadastro from "./Components/Cadastro"
import Footer from "./Components/Footer"
export default function App() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/habitos" element={<Habitos />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}