import { Header } from "./components/Header";
import { Main } from "./components/Main"
import { MainContinuos } from "./components/MainContinuos";
import { GapFooter } from "./components/GapFooter";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/global";

export function App() {

    return (
        <>
                <Header/>
                <Main/>
                <MainContinuos/>
                <GapFooter/>
                <Footer/>
                <GlobalStyle />
        </>
    );
}
