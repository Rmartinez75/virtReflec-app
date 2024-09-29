
import NavBar from "@/components/NavBar";
import ProdTree from "@/components/ProdTree";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import MobileHomeComp from "@/components/MobileHomeComp";


function HomePage() {
  return (
    <>
        <ProdTree />
        <MobileHomeComp />
        <ScrollToTopButton />
    </>
  )
}

export default HomePage