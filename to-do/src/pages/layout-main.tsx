import { Outlet } from "react-router";
import Header from "../core-componentes/Header";
import MainContent from "../core-componentes/Main-Content";
import Footer from "../core-componentes/Footer";


export default function LayoutMain() {
    return (
        <>
            <Header />
            <MainContent>
                <Outlet />
                CONTEUDO PRINCIPAL
            </MainContent>
            <Footer />
        </>
    )
}