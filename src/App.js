import { Header } from "./components/Header";
import { Main } from "./components/Main"
import { MainContinuos } from "./components/MainContinuos";
import { GapFooter } from "./components/GapFooter";
import { Footer } from "./components/Footer";

export function App() {
 
  return (
    <>
      <Header />
      <Main/>
      <MainContinuos />
      <GapFooter />
      <Footer />
    </>
  );
}